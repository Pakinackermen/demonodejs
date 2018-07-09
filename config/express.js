var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var validator = require('express-validator');
var cookieSession = require('cookie-session')

 module.exports = function() {
    var app = express();
    
    // if (process.env.NODE_ENV === 'development'){
    //     app.use(morgan('Method :method URL=:url Timing=:response-time ms' ));
    // }    
    // else{
    //     app.use(compression)
    // }
    app.use(bodyParser.urlencoded(
        {extended: true}
    ));
    app.use(bodyParser.json());
    app.use(validator());
    app.use(cookieSession({
        name:'session',
        keys:['secret_key1', 'secret_key2']
    }))

    require('../app/routes/index.routes')(app)
    require('../app/routes/user.routes')(app)
    
    app.set('views', './app/views');
    app.set('view engine', 'jade');
    require('../app/routes/index.routes')(app)
    require('../app/routes/user.routes')(app)
     app.use(sass({
        src: './sass',
        dest: './public/css',
        outputStyle: 'compressed',
        prefix: '/css',
        debug: true
    }))

    app.use(express.static('./public'))
    
    return app; 
}