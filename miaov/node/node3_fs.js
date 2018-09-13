const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{
    fs.readFile('./view/index.html',(error,data)=>{      
        if(error){
            res.write('404');
        }else{
            res.write(data.toString());
            console.log(data);
        }
        res.end();
    });
}).listen(80);
