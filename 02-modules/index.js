// what are modules in node.js?

// In node.js are reusable block of code that can be exported from one file and import in another file
// hepls in avoid code repetition and organize code

// similar to lego blocks - small pieces combine to make bigger application.

// types of modules
// 1) built-in modules - provide by node.js itself
// eg. fs - file system operation, http - create server , path - handle file path

const fs = require("fs");
fs.writeFile("./hello.txt","Hello World!", (err,result) => {
     console.log("Hello")
}) ;

// 2) local modules - created by dev in their project

// math.js 
function add(a,b) {
    return a + b;
}

module.exports = { add };

// app.js 
const { add } = require("./math");
console.log(add(2,3));

// 3) Third-party modules - installed using npm
// eg. express,mongoose

const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello World"));
app.listen(3000);


// Q - What is the difference between CommonJS (require) and ES6 modules (import/export) in Node.js?

// There are two module systems in Node.js
// Commonjs - old and default system that uses require and module.exports syntax
// It loads synchronously at runtime and fully dynamic can be require conditionally
// module.exports  - only one object can be exported
// syntax: 
const fs = require("fs");
module.exports = { myFunc };

// ES6 Modules - modern way that use import and export syntax.
// It loads async , statically analyzed and support both name and default export.
// It also require .mjs extension or "type":"module" in package.json to use
// syntax:
import fs from "fs";
export const myFn = () => {};

// What are named exports vs default exports?

// named exports - export multiple value by name 
// must use same name when importing
// math.js 
export const add(a, b) {
    return a + b;
}

export const sub(a, b) {
    return a - b;
}

// app.js
import { add, sub } from "./math"

// default export - export single main value from a file
// can rename it when importing
// math.js
export default function add(a, b) { return a + b; }

// app.js
import sum from './math.js';

// What is Tree-shaking?

// tree shaking is process of removing unused(dead) code during build process, so that only part of lib or module that are used end in final bundle
// relies on static analysis hence supported with ES modules (import/export) not commonjs(require);

// eg.
// utils.js
export function add(a, b) { return a + b; }
export function sub(a, b) { return a - b; }
export function mul(a, b) { return a * b; }

// main.js
import { add } from './utils.js';
console.log(add(2, 3));

// without tree shaking -> the bundle may include sub,mul fn -> even if they are not used
// with tree shalking using bundler like webpack -> analyze the import and include only add, dropping sub and mul hence avoid bloating.

// Real-world Analogy

// Imagine packing for a trip ✈️.
// You have a wardrobe (utils.js) full of clothes.
// You only need t-shirts and jeans (add), but if you pack the whole wardrobe (sub, mul), your bag is heavy.
