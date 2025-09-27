//  EJS - Embedded Javascript

// It's template engine for node.js that let's u generate HTML pages dynamically using js
// It like html + js 
// U can inject data from server into HTML

// Why u should use EJS?

// 1) dynamic html rendering: 
// U can inject data from server into HTML pages
// eg. showing user name, list of product
// res.render('index', { name: 'Bella' });
// <h1>Hello, <%= name %></h1> 

// 2) easy syntax - <%= %> or <% %>

// 3) server side rendering - ejs renders HTML on server, then send it to brwoser 
// Good for SEO

// 4) integrates easily with express - app.set('view engine;,'ejs');

// app.js
const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/' , (req,res) => {
    const user = { name: 'Bella', age:20 };
    res.render('index', { user });
});

app.listen(3000);

