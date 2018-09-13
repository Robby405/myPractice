const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{
    let path = './view';
    let URL = req.url;
    // console.log(req.url);

    //异步
    fs.readFile(path + URL,(error,data)=>{      
        if(error){
            res.write('404');
        }else{
            res.write(data.toString());
            // console.log(data);
        }
        res.end();
    });
}).listen(80);
