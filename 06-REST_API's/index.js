// REST API - stands for Representational State Transfer is an architectural style for designing api's
// It is based on the principle of REST principle where resources are exposed via endpoints and allow client to interact with them using HTTP method.

// REST principles 

//  1) Client-Server Architecture

// client: req resources ,  handles ui and ux
// server: provides resources, handles data storage, processing and logic 
// The server and client should operate independently

// cleint make http req to rest api, server rprocess the req( crud operation)
// server responds with json data or status code

// analogy: client - customer, server - kitchen

// 2) REST API is Stateless

// stateless means it does ot store any client session state(info) on server between req
// each req is self-contained carrying all info about auth,param and data.

// eg . if  when client req GET /users/1 with JWT, server respond with user data without remembering previous req.

// 3) Uniform inteface:

// must follow proper http method for crud operation
// eg . GET  - to get data from server not POST
// using right method for the action

// proper status codes:
// eg. 200 -> success
// eg. 404 -> not found

// return consisitent response format 
// eg. prefer JSON for all format

// versioning api
// eg. /api/v1/users

// proper error handling.

// Implementing a REST API 

const express = require("express");

const app = express();

// middleware that parse JSON bodies
app.use(express.json());

// in-memory database
const users = [
    { id: 1, name: "Swapnil" , email: "swap15@gmail.com"},
    { id: 2, name: "Alice", email: "alice@example.com" },
    { id: 3, name: "Bob", email: "bob@example.com" }
]

// get all users
app.get("/api/users" , (req,res) => {
    res.json(users);
});

// get a single user by ID
app.get("/api/users/:id" , (req,res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    if(!user) return res.status(404).json({ message: "User Not Found"})
    res.json(user);
});

// create new user
app.post("/users", (req,res) => {
    const newUser = {
        id: users.length + 1, ...req.body
    };
    users.push(newUser);
    console.log("New user created successfully"); 
});

// put -> replace user
app.put("/users/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).json({ message: "User not found" });
    users[index] = { id, ...req.body };
    res.json(users[index]);
});

// patch -> update user partially
app.patch("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });
  Object.assign(user, req.body); 
  res.json(user);
});


// remove user
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: "User deleted" });
});

app.listen(3000,() => { 
    console.log("Server started")
})
