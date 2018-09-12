import React from 'react'; //核心文件
import ReactDOM from 'react-dom'; //处理DOM相关

import registerServiceWorker from './registerServiceWorker';

import News from './components/news';
//组件的名字首字母必须大写，用来区分内置HTML标签
//使用组件跟实际标签是一样的<组件名字></组件名字>
//组件的类，在react内部会初始化

//组件 函数组件 类组件
function Custom(){
    return <div>我是自定义的函数组件</div>
}

let data = {
    title: '新闻',
    list: ['新闻1','新闻2','新闻3','新闻4']
}
let data2 = {
    title: '娱乐',
    list: ['娱乐1','娱乐2','娱乐3','娱乐4']
}

//纯渲染，不在index.js中堆积组件
//index.js  js入口 组件的入口（把页面中的组件拼凑在这里）
ReactDOM.render(
    <div>
        <News {...data}/>
        <News title={data2.title} list={data2.list}/>
        <News />
        <Custom />
    </div>,
    document.getElementById('root'),
    ()=>{
        console.log('渲染完成')
    }
);
registerServiceWorker();
