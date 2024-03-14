//First, you need to declare the express js inorder to use it
const express = require("express");
//Second, you need to declare a router variable to use the express js and declare a Router function --
// --  A Router function creates a new Router object, Defining routes using methods like Get,Post etc.
const router = express.Router();
//Third, since I was using a MVC Model I need to declare a variable Controller to put all the logic that
//Needs inorder to fetch a request from the Controller and to send a data to the Server file
const registerController = require("../controllers/registerController");



module.exports = router;
