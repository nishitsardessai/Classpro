var usr= require('../models/Users');

exports.getUsers= function(){
    return usr.users;
}



exports.getUsers = function()
{
    return usr.users;
}

exports.getUser = function(id)
{
    for(var i=0; i<usr.users.length; i++)
    {
        if(usr.users[i].id==id)
            return usr.users[i];
    }
}

exports.Compare =function(email, password)
{
    for(var i=0; i<usr.users.length; i++)
       if((usr.users[i].username==email)&&(usr.users[i].password==password))
        {
            return usr.users[i];
        }
    return 0;
}

exports.postLogin=function(req,res){
    var email= req.body.email;
    var password= req.body.password;
    if(users.Compare(email,password))
        res.send("login successfull. Hi "+users.Compare(email,password).name );
    else
        res.send("login unsuccessfull");


}
