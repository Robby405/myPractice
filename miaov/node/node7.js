const http = require('http');
const fs = require('fs');

/* 
    /get>name='xiaosheng'
    接口
    静态资源
*/
let sql = ['xiaosheng','yellow','keshou'];
http.createServer((req,res)=>{
    let URL = req.url;
    let path = './view';
    if(URL !== '/favicon.ico'){
        if(URL.includes('/get')){ //是接口
            let str = URL.split('?')[1];
            str = str.split('=')[1];

            if(sql.includes(str)){
                res.write('{"code":1,"msg":"用户已注册"}');
            }else{
                sql.push(str);
                res.write('{"code":0,"msg":"注册成功"}');
            }
            res.end();
        }else{  //走静态资源
            if(URL == '/'){
                URL = '/index.html';
            }
            let data = fs.readFileSync(path + URL);
            res.write(data.toString());
            res.end();
        }
    }
}).listen(80);