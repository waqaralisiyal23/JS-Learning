const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000,function(err){
  if(err){console.log(err)}
  else{console.log("Server is running on port 3000")}
})
