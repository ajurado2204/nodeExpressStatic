/**
 * Created by Ale on 2/6/16.
 */
var express = require('express');
var GitHubApi = require('node-github')
var app = express();
var PORT = process.env.PORT || 8080;

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

app.get('/dashboard/:githubuname', function(req, res) {
  var github = new GitHubApi({
    version: "3.0.0"
  });

  console.log(req.params.githubuname);
  github.user.getFrom({
    user: req.params.githubuname
  }, function(err, gitResponse){
    res.send(JSON.stringify(gitResponse));
    //console.log(JSON.stringify(gitResponse));
  });
});

app.listen(PORT, function(){
  console.log("listening on port %s", PORT);
});
