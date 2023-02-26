//jshint esversion:6 
const express = require("express");
const bodyParser = require("body-parser");

const app = express(); 
app.use(bodyParser.urlencoded({extended: true})) //urlencoded Htmlフォームからサーバーに投稿される情報を取得しようとするときはいつでも使用する
                                                //拡張オプションをtrueに設定することで、基本的にネストしたオブジェクトを投稿することができるようになる
app.get("/", function(req, res){
                                           //indexに到着するための筋道
  res.sendFile(__dirname + "/index.html") //__dirnameは現在のファイルパスが他のコンピュータ、クラウド、リモートサーバーなど、どこでホストされているかに関係なく表示される。
});

app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
  
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / Math.pow(height, 2);
  const digit = 1;
  res.send("Yor bmi is " + bmi.toFixed((digit)));
})

app.listen(3000, function(){
  console.log("Surver starts on port 3000");
});



//npm install body-parser
//ポストリクエストから送られてくる情報を渡す