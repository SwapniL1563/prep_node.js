//  JWT - JSON WEB TOKEN is a stateless way of authenticating user
//  It's just like a string consist of 3 parts:
//  Header - containing metadta about token and algorithm used for signing
//  Payload - contain user data and claim - like issuer, name , email, role
//  Signature - ensures token integrity, created by encoding header + payload and signing with secret key

//  JWT AUTH Flow:

//  user logs in with username/name -> server validates the credentials 
//  if valid then create a JWT token with user info (payload), sign it with secret key and send this token back to client
//  client stores this token in loaclastorage,sessionStorage or cookies
//  on next time when client make req -> it attaches JWT in Athorization: Bearer <token> header
//  server verifies JWT signature using secret key -> if valid, process req and if invalid rejects it.   


// Adv: Stateless, easy to scale
// Dis: Can't revoke token until it expires
//  if token is stolen -> attacker can steal info
// storing in localstorage us tricky
// larger payload


// simple jwt auth 

// main.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/jwtAuthDemo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));