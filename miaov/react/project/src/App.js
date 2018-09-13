import React, { Component} from 'react';
import News from './components/news';
import Tab from './components/tab';

let data = {
    title: '新闻',
    list: ['新闻1','新闻2','新闻3','新闻4']
}
let data2 = {
    title: '娱乐',
    list: ['娱乐1','娱乐2','娱乐3','娱乐4']
}

function Custom(){
    return <div>我是自定义的函数组件</div>
}

class App extends React.Component{
    render(){
        return(
            <div>
                {/* <News {...data}/>
                <News title={data2.title} list={data2.list}/>
                <News />
                <Custom /> */}
                <Tab />
            </div>
        )
    }
}

export default App;