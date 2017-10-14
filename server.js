var express = require("express");
var path = require("path");

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname,"/dist")));

console.log(path.join(__dirname,"/dist"));
// app.use(express.static(__dirname));

app.listen(app.get('port'),function(){
    console.log("Started listening on port", app.get('port'));
})