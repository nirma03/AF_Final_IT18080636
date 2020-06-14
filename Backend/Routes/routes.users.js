const express = require('express');
const userRoutes = express.Router();
let Users = require('../Models/models.users');


//add a new user
userRoutes.route('/add').post(function (req,res) {
    let user = new Users(req.body);
    user.save()
        .then(user =>{
            res.status(200).json({'Message':'User added successfully'});
        }).catch(err =>{
        res.status(400).send('User was not added successfully');
    });
});

//update a user
userRoutes.route('/update/:id/:firstName/:lastName/:email/:username/:password/:confirmPassword/:phone').get(function (req, res) {
    console.log("update function called");
    let id = req.params.id;
    let firstName=req.params.firstName;
    let lastName=req.params.lastName
    let email=req.params.email;
    let username=req.params.username;
    let password=req.params.password;
    let confirmPassword = req.params.confirmPassword;
    let phone=req.params.phone;

    console.log("**" + id);


    Users.updateOne({_id : id},{$set: {firstName :firstName, lastName :lastName,email: email, username:username,
            password: password,confirmPassword: confirmPassword, phone: phone }}).then(user=>{
        console.log(" User updated successfully");
        console.log(user);
        res.status(200).json({'userUpdate':'successfull'});
    }).catch(err=>{
        console.log("update failed");
        res.status(400).send('fail');
    });
});

//delete a user
userRoutes.route('/delete/:id').get(function (req, res) {
    let id=req.params.id;
    console.log("Delete function called!");

    Users.deleteOne({_id:id}).then(user=>{
        console.log("successful");
        res.status(200).json({'userDelete':'successful'});
    }).catch(err=>{
        console.log("Delete failed");
        res.status(400).send('fail');
    });
});

//view user by id
userRoutes.get('/:id',(req,res)=>{
    Users.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = userRoutes;