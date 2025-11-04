// Cluster in Node.js is used to run multiple instances of Node.js that can distribute workload among the app threads
// Cluster is module in node.js used to create multiple worker process that share same port
// Each worker run on separate CPU core, enabling node.js to use multiple-core system and handle traffic

// why use cluster?
// we know node.js is single threaded, by default it uses only one CPU core or thread
// cluster helps scale node.js app horizontally on single machine by creating multiple worker process running on sep cores handling more concurrent req and high-traffic

// working:
// master process: control and manage worker process
// it forks or  distributes incoming connection using round-robin 

// worker process: actual instances of Node.js app handling req
// each worker run independently on separate core but same port

const express = require("express");
const os = require("os");
const cluster = require("cluster")
const PORT = 8000;

const numCPUs = os.cpus().length;

    if(cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`) 

    //  fork process to worker
    for(let i = 0; i < numCPUs;i++) {
        cluster.fork()
    }

    // restart worker if it dies
    cluster.on("exit", (worker,code,signal) => {
        console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
        cluster.fork();
    })

    }
    else {
    // worker processes
     const app = express();

     app.get("/" , (req,res) => {
        res.send(`Hii there from worker with ${process.pid}`)
     });

    app.listen(PORT, () => {
        console.log(`Worker ${process.pid} started on port ${PORT}`);
    });
};