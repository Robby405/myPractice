const http = require('http');
const fs= require('fs');
const querystring = require('querystring');
/*
    /get?name=xxx
    name = xxx & pass = xxx
*/
let sql = [
    {name: '小生'},
    {name: 'yellow'},
    {name: 'xiaoemo'}
]
http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url !== '/favicon.ico'){
        //说明走接口
       let temp = '';
       if(req.url.includes('/post1')){
           req.on('data',(d)=>{
                temp += d;
           });
           req.on('end',()=>{
            //console.log(querystring.parse(temp));
            let obj = querystring.parse(temp);
            let f = sql.find((e)=>e.name==obj.name);
            if(f){
            // if(sql.includes((e)=>e.name == obj.name)){
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                res.write('{"code":1,"msg":"已占用"}');
            }else{
                sql.push({
                    name:obj.name
                });
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                res.write('{"code":0,"msg":"成功"}');
               
            }
            res.end();
           });
           
        }else{
            let path = './view';
            //走静态文件
            try{
                let data = fs.readFileSync(path + req.url); 
                res.write(data.toString());
                res.end();
            }catch(error){
                let data = fs.readFileSync(path + '/404.html');
                res.write(data.toString());
                res.end();
            }
            
        }
        //console.log(req.url); 
    }
    
}).listen(80);