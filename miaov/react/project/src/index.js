import React from 'react'; //核心文件
import ReactDOM from 'react-dom'; //处理DOM相关

import registerServiceWorker from './registerServiceWorker';


import App from './App'
//纯渲染，不在index.js中堆积组件
//index.js  js入口 组件的入口（把页面中的组件拼凑在这里）
ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root'),
    ()=>{
        console.log('渲染完成')
    }
);
registerServiceWorker();
