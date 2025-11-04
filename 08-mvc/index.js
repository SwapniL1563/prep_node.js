// Model View Controller (MVC) in Node.js is software design pattern that separates an app into 3 comp:
// 1) Model (data layer) 
// - manages data and rules of app
// - interact with db (Mongodb)
// - eg. user Model defines schema and db operations

// 2) View (presentaion layer) 
// - represent what users see -> ui templates or json responses (for api)
// - in REST api , view is jsut JSON resonse not HTML

// 3) Controller (application layer)
// - handles client req, interact with models, selects view and send res
// - bridge between Model and View

// 4) Express Route 
// - connect URL endpoint to comtrollers.

//  Real world analogy:
// Imagine a restaurant:
// Model → kitchen & recipes (data, rules)
// Controller → waiter who takes your order (handles requests)
// View → the food served on your plate (response/UI)

// Why MVC is better than putting every thing in one file?
// 1) separation of concerns
// 2) scalability -> easy to add more mode.view, controller
// 3) reusabilty and maintainablity unlike one file

// What is considered as View?
// In web apps (with templating engines), View = HTML pages.
// In REST APIs (most Node.js/Express backends), View = JSON response sent to client(eg.React frontend)

//  eg. MVC in Express.js

// structure
// project/
// ├── models/
// │   └── User.js
// ├── controllers/
// │   └── userController.js
// ├── routes/
// │   └── userRoutes.js
// ├── views/
// │   └── user.ejs  (optional if using templating)
// ├── app.js

// Model (User.js)
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:string,
    email:string,
});

module.exports = mongoose.model("User", userSchema);

// Control (userController.js)
const User = require("../models/User");

async function getUsers(req,res) {
    const users = await User.find();
    res.json(users);
}

module.exports = { userController }

// Route (userRoutes.js)
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController);

module.exports = router;

// main app (app.js)
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
mongoose.connect("mongodb://localhost/mvc_example");

app.use("/api", userRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));




