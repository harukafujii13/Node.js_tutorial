//jshint esversion:6 
const express = require("express");
const app = express();


//サーバーに送られる全てのHTTPリクエストを特定のポートでlistenするように指示
app.listen(3000, function(){
  console.log("Surver starts on port 3000");
});