// http - core module in node.js that allow us to create server and handle http req and res
// we can creat a simple server using http.createServer and listen on port and also handle http methods like GET, POST.

// eg. server

const http = require("http");

const server = http.createServer((req,res) => {
  res.end("Server Started")
})

// const http = require("http");

// const server = http.createServer((req,res) => {
//     res.end("Hello from server!");
// });

// server.listen(3000, () => {
//     console.log("Server started")
// });

// Handling HTTP methods: 
// like GET, POST, PUT, UPDATE, DELETE

// GET -> retrieve data from server
// POST -> create or send data to server
// PUT -> update / replace a resource completely
// PATCH -> partial update
// DELETE -> remove a resource 
// OPTIONS -> ask what methods are allowed(Pre-flight request in CORS.)
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("GET: Welcome to the homepage!");
  }
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Data received", data: body }));
    });
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));


//  Diff between PUT AND PATCH?

// PUT replaces the entire resource with new data 
// eg. if i send put req with only name and email, other field like age might be lost.

// PATCH does partial update , updates only the specific field in req leaves other field unchanged 
// eg. only namand email gets updated

const http = require("http");

let user = { id: 1, name: "Alice", email: "alice@example.com", age: 25 };

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/user") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  }

  // PUT → Replace entire object
  else if (req.method === "PUT" && req.url === "/user") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      user = JSON.parse(body); // overwrite whole object
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "User replaced", user }));
    });
  }

  // PATCH → Update only given fields
  else if (req.method === "PATCH" && req.url === "/user") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      const updates = JSON.parse(body);
      user = { ...user, ...updates }; // merge updates
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "User updated", user }));
    });
  }

  // Default 404
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));

