/**
 * Created by Ale on 2/6/16.
 */
var express = require('express');
var app = express();
var PORT = 8080;

app.use('/js',express.static("public/js"));
app.use('/css',express.static("public/css"));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + "/views/home.html");
});

app.get('/register', function(req, res){
  res.sendFile(process.cwd() + "/views/register.html");
});

app.get('/dashboard', function(req, res){
  res.sendFile(process.cwd() + "/views/dashboard.html");
});

app.listen(PORT, function(){
  console.log("listening on port %s", PORT);
});
