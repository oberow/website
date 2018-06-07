var express = require("express");
var path = require("path");

//get routes
var note = require('./source/routes/note');
var home = require('./source/routes/home');
var book = require('./source/routes/book');

var app = express();

//set port
//set merely stores a variable with app, you can store any variable you want
app.set('port', (process.env.PORT || 5000));

//set static
//express serves any file in the static folder without you having to set up a handler
app.use(express.static(path.join(__dirname, 'public')));

//view engine setup
app.set('views', __dirname + '/source');
app.set('view engine', 'pug');

//basedir is prepended to includes if the includes path is absolute, ie /root.pug instead of aoeu/head.pug
//locals stores local variables that persist for the lifetime of the application
app.locals.basedir = path.join(__dirname); //tell pug what the basedir is

console.log(path.join(__dirname))

//use routes
app.use('/', home);
app.use('/note', note);
app.use('/book', book);


app.listen(app.get('port'), function () {
    console.log("Started listening on port", app.get('port'));
})