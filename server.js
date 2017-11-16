var express = require("express");
var path = require("path");

//get routes
var note = require('./source/routes/note');
var home = require('./source/routes/home');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

//view engine setup
app.set('views', __dirname + '/source');
app.set('view engine', 'pug');
app.locals.basedir = path.join(__dirname); //tell pug what the basedir is

//use routes
app.use('/', home);
app.use('/note', note);

app.listen(app.get('port'), function () {
    console.log("Started listening on port", app.get('port'));
})