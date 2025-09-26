// middleware - a fn  that runs between req and res cycle.
// It can access req,res, and next fn to either:
// - process the req 
// - modify the data
// - end the req
// - pass control the next middleware

// real life analogy:
// middleware is like security check at airport
// first u show ur ID(auth middleware) if valid then control reach to next middleware
// there ur baggage is scanned(validation)
// finally after it is valid u reach the boarding gate(actual route like "/dashboard")

// Used of middleware:
// authentication
// eg. check if user is logged in and has permission to access

function auth(req, res, next) {
  if (req.headers["authorization"] === "valid-token") {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
}

app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to dashboard!");
});


// logging - Keep track of incoming requests for debugging, monitoring, or analytics.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// error handling - catch application errors and return proper responses.
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Something went wrong!");
});

// parsing req bodies - convert raw request body into usable formats (JSON, form-data)
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); // parse form data

// Types of middleware:

// Application-level → runs on all requests (app.use)
// Route-level → runs only on specific routes (app.get("/user", middleware, handler))
// Built-in → e.g., express.json() for parsing JSON
// Third-party → e.g., morgan for logging, helmet for security
// Error-handling → (err, req, res, next) signature

// diff between application vs route level middleware
// application level:
// applied to entire app defined using (app.use());
// eg. app.use(express.json()) ;

// route level:
// applied only to specific routes 
// app.get("/admin", authMiddleware, (req, res) => {
//   res.send("Welcome Admin!");
// });


// Can middleware terminate a request without next()?
// yes, middleware can either:
// call next() to pass control or end the req, res cycle w/o calling next.