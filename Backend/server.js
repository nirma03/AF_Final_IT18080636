const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4000;
const mongoose = require('mongoose');

const userRoute = require('./Routes/routes.users');
const loginRoute = require('./Routes/routes.login');
const categoryRoute = require('./Routes/routes.category');

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/login',loginRoute);
app.use('/category',categoryRoute);

mongoose.connect("mongodb+srv://newuser:newuser@cluster0-q7qra.mongodb.net/Project1?retryWrites=true&w=majority", {useNewUrlParser:true})
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("Database connection successful");
})

//start the server using express
app.listen(PORT,function () {
    console.log("Server is running on PORT: " + PORT);
})
