import React from 'react'; //核心文件
import ReactDOM from 'react-dom'; //处理DOM相关

import registerServiceWorker from './registerServiceWorker';

//向页面中输出一个标签 h2
// let h = <h2>hello,我创建了</h2>
//jsx = javascript + xml
//他被称为JSX，一种Javascript的语法扩展
//JSX来描述用户界面长什么样子

//本质上是对象，用来描述一个元素的type,attribute,children 虚拟DOM

//创建react的标签，返回的是一个对象
let h = React.createElement('h2',null,'hello');
//当使用jsx语法的时候，内部会调用React.createElement生成一个对象的形式
//推荐使用jsx这样的语法更能清晰表达标签之间的关系
console.log(h);
ReactDOM.render(
    h,
    document.getElementById('root'),
    ()=>{
        console.log('渲染完成')
    }
);
registerServiceWorker();
