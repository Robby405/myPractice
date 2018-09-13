const http = require('http');
const fs= require('fs');
const querystring = require('querystring');
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
        //说明走接口
       let temp = '';
       let json = {code:1,msg:"失败"};
       if(req.url.includes('/post2')){
           req.on('data',(d)=>{
                temp += d;
           });
           req.on('end',()=>{
            //console.log(querystring.parse(temp));
            let obj = querystring.parse(temp);
            switch(obj.act){
                case 'add':
                    /*注册
                        有没有这个人，有就显示被占用，没有就直接添加  
                    */
                    let o = sql.find(e=>e.name == obj.name);
                    if(o){
                        json.code = 2;
                        json.msg = "用户名占用";
                    } else{
                        //没有这个用户
                        sql.push({
                            name: obj.name,
                            pass: obj.pass
                        });
                        json.code = 0;
                        json.msg = "注册成功";
                    }
                break;
                case 'login':
                    //登录 有没有这个人 -> 没有 提示注册
                            //有 -> 登录 
                            console.log(obj);
                        let n = sql.find(e=>e.name == obj.name);
                        if(n){
                            //判断密码
                            if(n.pass == obj.pass){
                                json.code = 0;
                                json.msg = '登录成功';
                            }else{
                                json.code = 3;
                                json.msg = '用户名或密码错误';
                            }
                        }else{
                            //没有这个人，就提醒去注册
                            json.msg = '没有这个用户';
                        }
                break;
            }
            res.writeHead(200,{'Content-type':"text/hrml;charset=UTF-8"});
            res.write(JSON.stringify(json));
            console.log(json);
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