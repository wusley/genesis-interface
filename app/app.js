var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    cors = require('./utils/cors'),
    app = express();

router = express.Router();

// view engine setup
// app.set( 'views', path.join( __dirname, '/' ) );
// app.set( 'view engine', 'html' );

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( cookieParser() );

app.use( express.static( path.resolve( __dirname, 'build' ) ) );

app.all( '*', cors, function( req, res, next ) {

  console.log( 'route *' );

  res.sendfile( __dirname + '/build/index.html' );

} );

module.exports = app;
