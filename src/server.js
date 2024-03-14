//First, you need to declare express inorder to use the express js framework
const express = require("express");
//Secondly, you need to declare the mongoose in order to access the database
const mongoose = require("mongoose");
//Thirdly,you need to declare the cors for anonymous request, in which means the requester isn't identified
const cors = require("cors");
//Fourth, declaring the require dotenv inorder to access the env file which contains URI for the database and
//dedicated PORT
require("dotenv").config();
//Fifth, declaring the routes. Meaning inorder to access the routes you need to declare it in the variable
const mainRoutes = require("./routes/User/registerRoutes");

//Sixth, declaring the app so i can use the express js functionality
const app = express();
//Seventh, to access the port i need to declare it and inorder to acess the Port declared in env file
//I need to put process.env.PORT and use LOGICAL OR and put the 5000
const PORT = process.env.PORT || 5000;

//Eight, inorder to use the cors you need to declare app.use and declare the cors to access it and use it
//using express js
app.use(cors());
//Nine, declaring app.use and declaring express.json convert all your data into json file
app.use(express.json());

//Ten, inorder to use the mongodb, you need to use mongoose.connect and put the process.env and the URI Name 
//to process the data
mongoose.connect(process.env.MONGODB_URI)
//Eleven, After connecting to the mongoDB, to check if the data has been received or it was connectd 
//use then to verify if the data has been received or not
.then(() => console.log("MongoDB Connectd"))
//Twelve, When the data was not received or the database was not connected then that's the time to use catch
//Inorder to catch the error and print a messeage that it there is a error on the code
.catch(error => console.log(error))

//Thirteen, the '/posts' serves as a root route inorder to call the api endpoint that will need to put in the url
app.use('/posts', mainRoutes);


//Fourteen, The listen function was been use to return the http 
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})