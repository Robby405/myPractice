const fs = require('fs');

/*
    writeFile写文件
        第一个参数：写什么文件
        第二个参数：写什么内容
        第三个参数：回调函数
*/

//异步
// fs.writeFile('./view/2.txt','hahah',()=>{
//     console.log("成功");
// });

//同步
// fs.writeFileSync('./view/3.txt','hehe');

/*删除 */
fs.unlink('./view/2.txt',(error)=>{
    if(error){
        console.log("删除失败");
    }else{
        console.log("删除成功");
    }
})