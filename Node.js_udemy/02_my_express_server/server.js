//jshint esversion:6 
const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, World!<h1>");
})  //app.get() Expressが提供するmethodで、ブラウザがサーバーと接触してgetリクエストを行った時の動作を指定することができる

app.get("/contact", function(req, res){
  res.send("Contact me at: haruka@gmail.com"); //  http://localhost:3000/contactでgetリクエストを行うと"Contact me~"がsendされる
})

app.get("/about", function(req, res){
  res.send("My name is Haruka and I love wine and code.");
})

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</li><li>basketball</li></ul>")
})


//サーバーに送られる全てのHTTPリクエストを特定のポートでlistenするように指示
app.listen(3000, function(){
  console.log("Surver starts on port 3000");
});