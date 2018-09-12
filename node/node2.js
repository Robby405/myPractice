const http = require('http'); //node_modules
// console.log(http);

/*
    request:请求  -> 接收客户端发送的内容
    response：响应 -> 发送给客户端
*/
http.createServer((request,response)=>{
    // console.log(request.url);  浏览器前端发送的信息
    response.write('{"code":0,"msg":"hello"}');  //返回给浏览器
    response.end();
}).listen(80);
