const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});

//use -> 引入中间件
//req,res 二次封装,req.query把字符串转为对象
// /get/user

app.get('/get',(req,res)=>{
    console.log(req.query);
});
app.post('/post',urlencodedParser,(req,res)=>{
    console.log(req.body);
});
app.use(express.static('view'));

app.listen(80);