// Express - lightweight and minimal framework for node.js 
// it is built on node.js http module allow us to create server easily
// handles routing,middleware, req/res management 

// why is express used?
// simplifies node.js server code
// middleware support 
// routing system - rest-api support
// json handling 

// Real-World Analogy
// - Think of Express.js as a waiter in a restaurant 
// - Node.js kitchen can cook (handle requests),
// - but the waiter (Express.js) organizes orders, routes them to the chef, serves the food (responses), and even calls in the manager (middleware) if there’s a problem.


// basic express server
const express = require("express");
const app = express();
const PORT = 3000;

// basic GET route
app.get("/" , (req,res) => {
    res.send("Hello from server!")
});

// POST route
app.post("/users", (req,res) => {
    const user = req.body;
    res.status(201).json({ messgae: "User Created succesfully" , user})
});

// PUT route
app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  res.json({ message: `User ${id} replaced`, updates });
});

// PATCH route
app.patch("/user/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  res.json({ message: `User ${id} updated`, updates });
});

// DELETE route
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ${id} deleted` });
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});


//express routing - determines how an app responds to client req on specific path and http method

// eg . 