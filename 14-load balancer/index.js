// load balancer - it is a system that distributes incoming network traffic across multiple servers or resources to ensure reliabilty,effeciency and high availabilty

// It acts like a bridge between client and server like a traffic manger - deciding which server should handle req

// Working:
// - a user send a req ( like opening a website)
// - req will first hit the load balancer instead of going to one server
// - load balancer will now decides which server should handle the req based on rules like
// a) round robin: send each new req to server in order
// b) least connectiom: send to server with fewst active connections
// c) IP hasing: direct the same user IP to same server

// - it forwrd the req to server and then send the res back to user

// Types of Load Balancers:
// 1) Network load balancer - aws nlb
// 2) Application Load balancer - Nginx
// 3) Physical Load balancer - F5

// eg. if u have web app that runs on 3 backend server"
// if server 1 fail -> req goes to server 2 with no downtime

// Advantage of using Load balancer:
// 1) Horizontal Scaling - distribute traffic across multiple server so u can handle more users
// 2) High availabilty - if one server goes doewn traffic is redirected to diff server
// 3) Improved performance - prevent overloading on one server


// eg. NGINX - act as load balancer
// When acting as a load balancer, Nginx sits in front of multiple Node.js servers.
// It receives all client requests and distributes them across those servers to:
// Prevent overload on a single instance
// Improve performance & reliability
// Enable zero-downtime scaling

