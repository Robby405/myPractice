const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{
    let path = './view';
    let URL = req.url;
    // console.log(req.url);

    //同步
    if(URL !== 'favicon.ico'){
        try{
            let data = fs.readFileSync(path + URL);
            res.write(data.toString());
            res.end();
        }catch(error){
            res.write('404');
            res.end();
        }
        
    }
       
}).listen(80);
