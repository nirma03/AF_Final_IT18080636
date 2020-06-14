const express = require('express');
const categoryRoutes = express.Router();
let Category = require('../Models/models.categories');

//view a category by category id
categoryRoutes.get('/view/:id',(req,res)=>{
    Category.findById(req.params.id)
        .then(user => res.json(category))
        .catch(err => res.status(400).json('Error: '+err));
});

//view all categories
categoryRoutes.route('/view/allCategories').get(function (req, res) {
    Users.find(function (err, category) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(category);
        }
    });
});

//add a new category
categoryRoutes.route('/add').post(function (req,res) {
    let category = new Category(req.body);
    category.save()
        .then(category =>{
            res.status(200).json({'Message':'Category added successfully'});
        }).catch(err =>{
        res.status(400).send('Category was not added successfully');
    });
});


//update a category
categoryRoutes.route('/update/:id/:categoryName/:categoryDescription').get(function (req, res) {
    console.log("update function called");
    let id = req.params.id;
    let categoryName = req.params.categoryName;
    let categoryDescription=req.params.categoryDescription;

    console.log("**" + id);


    Category.updateOne({_id : id},{$set: {categoryName :categoryName, categoryDescription :categoryDescription }}).then(category=>{
        console.log(" Category updated successfully");
        console.log(category);
        res.status(200).json({'CategoryUpdate':'successfull'});
    }).catch(err=>{
        console.log("update failed");
        res.status(400).send('fail');
    });
});

//delete a category
categoryRoutes.route('/delete/:id').delete(function (req, res) {
    let id=req.params.id;
    console.log("Delete function called!");

    Category.deleteOne({_id:id}).then(category=>{
        console.log("successful");
        res.status(200).json({'categoryDelete':'successfull'});
    }).catch(err=>{
        console.log("Delete failed");
        res.status(400).send('fail');
    });
});

module.exports = categoryRoutes;