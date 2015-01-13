var express =require('express');
var app=express(); //creates server
var hbs= require('hbs');
var path= require('path');
var bodyParser= require('body-parser');

var users= require('./controllers/users');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);//html to read files with deafult html extension
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(express.static('public'));

app.get('/',function(req,res){
res.render('index',{ //index is the client, index.html
           title:"home",// home is like an id/variable, title can be accessed by using home
    
           users:users.getUsers});

});
app.get('/login',function(req,res){
res.render('login',{title:"login"});

});

app.post('/login', users.postLogin);

app.get('/about',function(req,res){
res.render('aboutus',{title:"about"});

});

app.get('/signup',function(req,res){
res.render('signup',{title: "signup"});

});



app.get('/users/:id', function(req,res){
    var user=users.getUser(req.params.id);//params.id sends route after users/
    res.render('profile', {
        title: "User Profile",
        abc :user,
    });
});


app.listen(3000);
