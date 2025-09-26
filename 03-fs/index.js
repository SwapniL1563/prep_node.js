// fs (file system) - fs module is an built-in / core module in Node.js that us interact with file system(read file,write file,delete file)
// it can work in both sync and async way 
// no need to install

// writing files 

// fs.writeFile(path,data,cb) - creates or overwrite  a file with data
const fs = require("fs");

// fs.writeFile("./demo.txt","Hi there",(err,data) => {
//     if(err) throw err;
//     console.log("File written!")
// } )

// fs.appendFile(path,data,cb) - add data to end of file w/o overwritting
fs.appendFile("./demo1.txt", "New text", (err) => {
  if (err) throw err;
  console.log("Data appended!");
});

// reading files

// // fs.readFile(path, encoding, callback) - read file async without blocking the event loop
// fs.readFile("./demo.txt","utf-8",(err,data) => {
//     if(err) throw err;
//     console.log("File data:" , data)
// })

// // fs.readFileSync(path, encoding) - read file sync - block execution until done
// const data = fs.readFileSync("./demo.txt", "utf-8");
// console.log("File content 1:", data);

// deleting files 
// fs.unlink(path,cb) - deletes a file 
// fs.unlink("./demo1.txt",(err) => {
//     if(err) throw err;
//     console.log("File deleted!");
// });

// working with directories 

// fs.mkdir("./demo" , (err) => {
//   if (err) throw err;
//   console.log("Directory created!")
// })

fs.readdir(".",(err, files) => {
  if (err) throw err;
  console.log("Files:", files)
});


// real world task 
// logging everytime an event happened

const logFile = "./demo1.txt";

function log(msg) {
    const entry = `[${new Date().toISOString()} ${msg}\n]`;
    fs.appendFile(logFile,entry,(err) => {
        if(err) console.error("Error")
    })
}

log("Server started");
log("User logged in");