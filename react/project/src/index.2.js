import React from 'react'; //核心文件
import ReactDOM from 'react-dom'; //处理DOM相关

import registerServiceWorker from './registerServiceWorker';

let data = 'hello';
//差值（表达式）求出值得形式都属于是表达式、运算符运算、函数调用、取值 0.a 变量 
function fn(){
    return 10;
}
let h = <h2 miaov={data}>   
    <span>{data}</span>
    <span>{1 + 1}</span>
    <span>{[1,2,3].map(item => item*2)}</span>
    <span>{true?1:0}</span>
    <span>{fn()}</span>
</h2>


var arr = [1,2,3,4];
let lis = arr.map((item,index)=>{
    return <li key={index}>{item}</li>
})
console.log(lis);

//根据数组生成元素 li
let listHtml = <ul>
    {lis}
</ul>
ReactDOM.render(
    listHtml,
    document.getElementById('root'),
    ()=>{
        console.log('渲染完成')
    }
);
registerServiceWorker();
