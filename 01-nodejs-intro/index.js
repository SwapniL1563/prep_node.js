// What is node.js?

// Node.js is js runtime env. that let js run outside the browser(on server).
// Founder Ryan Dahl took Google Chrome’s V8 engine, embedded it inside a C++ program, and combined it with an event loop powered by a C library called libuv to create node.js. This allowed JavaScript to run outside the browser and handle asynchronous I/O
// stack:  C++ core → interfaces with system resources low level system's low-level APIs (file system, network, OS).
// V8 Engine → executes JavaScript at high speed
// libuv → provides the event loop & async I/O

// Key Features:

// Asynchronous & Non-blocking I/O → handles thousands of requests simultaneously.
// Single-threaded with Event Loop → efficient concurrency without multiple threads.
// Fast Execution → powered by Google’s V8 engine.
// Cross-platform → works on Windows, macOS, Linux.
// Rich Ecosystem → npm (Node Package Manager) is the world’s largest package library.
// Scalability → great for microservices and distributed systems.


// Why is Node.js single-threaded, and how does it handle concurrency?

// Node.js is single-threaded because it runs JavaScript in a single thread using the event loop model.
// Instead of creating a new thread for each request (like Java or PHP servers), Node.js handles multiple requests concurrently using non-blocking asynchronous callbacks


// How Node.js Handles Concurrency?

// Single thread executes JavaScript (main thread).
// When an async operation occurs (e.g., DB query, file read, API call), Node.js offloads it to background workers (via libuv).
// When the async task finishes, the callback is queued and executed in the event loop.
// This way, Node.js can handle thousands of concurrent requests without creating new threads.