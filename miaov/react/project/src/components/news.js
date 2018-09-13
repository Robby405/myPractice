//创建组件
/*
    1、先引入react
    2、创建一个组件类，继承基组件类
    3、在类里面需要写一个render函数，内部返回一个jsx结构
    4、把创建的组件类导出去
*/

import React from 'react';
import ReactDom from 'react-dom';


//组件 函数组件 类组件
function Custom(){
    return <div>我是自定义的函数组件</div>
}

//定制组件 给组件传参

/**
 * 在组建中设置默认的props，本质上就是给类设置静态属性
 * 1.写在类中 用 关键字 statuc
 * 2.可以使用类.defaultProps
 */
class News extends React.Component{
    render(){
        console.log(this); //当前组件创建的实例对象
        console.log(this.props); //用来接收外面传进来的参数
        // return <div>
        //     <h2>{this.props.title}</h2>
        //     {
        //         this.props.list.length !==0 && <ul>
        //         {
        //            this.props.list.map((item,index) => {
        //             return <li key={index}>{item}</li>
        //             }) 
        //         }
        //         </ul>
        //     }           
        //     </div>
        let ulHtml = '';
        if(this.props.list.length){
            ulHtml = <ul>
                    {
                       this.props.list.map((item,index) => {
                        return <li key={index}>{item}</li>
                        }) 
                    }
                    </ul>
        }
        return <div>
            <h2>{this.props.title}</h2>
            {
                ulHtml
            }
        </div>
    }
}

News.defaultProps = {
    title: '默认的',
    // list: [1,2,3,4,5,6]
    list:[]
}
export default News;