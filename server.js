var express = require("express");
var path = require("path");

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname,"/dist")));

console.log(path.join(__dirname,"/dist"));
// app.use(express.static(__dirname));

app.set('views',__dirname + '/source');
app.set('view engine','ejs');

app.get('/',function(request,response){
    response.render('pages/index');
})
app.get('/about',function(request,response){
    response.render('pages/about');
})

app.listen(app.get('port'),function(){
    console.log("Started listening on port", app.get('port'));
})