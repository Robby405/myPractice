const express = require('express');
const route = express.Router();

/*
    /user/users get
    /user/username post
*/
route.get('/users',(req,res)=>{
    console.log('get');
});
route.post('/username',(req,res)=>{
    // console.log('post');
    if(req.body.name === '小生'){
        res.json({code:0});
        res.cookie('name','小生');
        // res.render('index',{
        //     title:'呵呵'
        // })
    }
   
});

//导出route模块
module.exports = route;