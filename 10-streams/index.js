//  Streams -> it is way to handle reading or writting data in chunks, instead of sending it at once
//  If u have huge file like sample.txt whose size is big(400mb)
//  If u read a huge file at once using fs.readFile , it load the entire file into memory -> can crash for larger files

// But using stream u process that data piece by piece

// eg. Reading a file without  using a stream

// const express = require("express");
// const fs = require('fs');
// const status = require("express-status-monitor")

// const app = express();

// app.use(status())

// app.get("/" , function(req,res) {
//      fs.readFile("./sample.txt", (err,data) => {
//         res.end(data)
//      })
// });

// app.listen(3000, () => console.log("Server started"));

// here, all data is ent at once leading to high memory usage 
// also we are storing data in local var before sending it to res

// Example: Reading a file using a stream

// const { log } = require("console");
const express = require("express");
const fs = require('fs');
const status = require("express-status-monitor")

const app = express();

app.use(status())

// create stream

const stream = fs.createReadStream("./sample.txt", "utf-8");

app.get("/" , function(req,res) {
     stream.on("data" , (chunk) => {
        res.send(chunk);
     })

     stream.end("end", () => {
        res.end();
     })
});

app.listen(3000, () => console.log("Server started"));

//  Types of streams:

// Readable stream - stream you can read from 
// fs.createReadStream()

// Writable Stream - stream you can write to
// Writing to a file using fs.createWriteStream()

// Duplex -	Both readable and writable	
// TCP sockets

//  Http req as readablestream

//  eg.
//  file upload 
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.method === 'POST') {
    const writeStream = fs.createWriteStream('uploaded_file.txt');

    // Pipe request data to a file
    req.pipe(writeStream);

    req.on('end', () => {
      res.end('File uploaded successfully!');
    });
  } else {
    res.end('Send a POST request to upload');
  }
}).listen(3001, () => console.log('Server running on http://localhost:3001'));


//  What is buffer ?
//  buffer is temporary memory storage used in Node.js to hold binary raw data, allow the processing of files effectively.
//  Buffers let Node handle raw bytes, like files, images, network packets.
//  A buffer is a fixed-size chunk of memory.
//  You can read/write bytes directly without converting to strings.
//  const buf1 = Buffer.alloc(10)

//  Stream emits chunk data as Buffers, which u can process them