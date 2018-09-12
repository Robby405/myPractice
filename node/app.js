const http = require('http');
const fs= require('fs');

/*
    /get?name=xxx
    name = xxx & pass = xxx
*/
let sql = [
    {name: '小生',pass:123},
    {name: 'yellow',pass:123},
    {name: 'xiaoemo',pass:321}
]
http.createServer((req,res)=>{
    if(req.url !== '/favicon.ico'){
       if(req.url.includes('/get')){
            let url = req.url.split('?')[1].split('&');
            // console.log(url);
            let obj = {}; //声明对象
            url.forEach(data => {
                let d = data.split('=');
                obj[d[0]]=d[1];
            });
            // console.log(obj);
            let o = sql.find((e)=>e.name == obj.name);
            if(o){
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                res.write('{"code":1,"msg":"已占用"}');
            }else{
                sql.push({
                    name:obj.name,
                    pass:obj.pass
                });
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                res.write('{"code":1,"msg":"成功"}');
            }
            res.end();
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