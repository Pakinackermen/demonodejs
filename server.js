// ----------------------- mounting request path


// var express = require("express");
// var app = express();
// app.listen(3000);

// var helloworld = (req, res, next) => {        
//         res.send("Hello world");
// }
// var end = (req, res, next) => {        
//         res.send("END");
// }
// app.use('/home', helloworld);
// app.use("/end", end);

// module.exports = app;
// import express from "./config/express";
// app = express();
// app.listen(3000);

// export default app;
// console.log('http://localhost:3000');
// ----------------------------------
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;
console.log('app listening on port 3000!')



