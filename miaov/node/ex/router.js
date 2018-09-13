const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
/*
    引入swig
*/
const swig = require('swig');
app.set('views',__dirname+'/view'); //html文件放在在view目录下
app.set('view engine','html'); //摸板引擎存放目录的关键字，固定字段
app.engine('html',swig.renderFile); //注册摸板引擎，固定字段
swig.setDefaults({cache: false}); //关闭swig缓存，提高响应速度

app.use('/index.html',(req,res)=>{
    // console.log(req.cookies.name);
    //配置需要渲染的数据
    res.render('index',{
        title:'呵呵哒',
        data:['小生','dudu','未央']
    });  //render方法只有在使用摸板引擎之后才会生效，其中 参数1是需要渲染的摸板名称，参数2就是需要渲染到页面的一些参数
});

app.use('/user',require('./routes/users'));
app.use('/view',express.static('./view'));
app.listen(80);