const express = require('express');
const loginRoutes = express.Router();
let Users = require('../Models/models.users');

//user login
loginRoutes.get("/userlogin/:username/:password",function (req,res) {
    let username = req.params.username;
    let password = req.params.password;

    Users.findOne({ username: username, password: password },)
        .exec()
        .then(userlogin =>{
            console.log("User Valid");
            console.log(userlogin);
            console.log("User Login is Valid");
            if( userlogin ){
                res.status(200).json({"Message": userlogin });
            }else{
                res.status(200).json({"Message": "unsuccessful  user login"});
            }
        }).catch(err=>{
        res.status(500).json(err);
    })
});

module.exports = loginRoutes;
