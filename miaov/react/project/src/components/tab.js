import React from 'react';
//事件要遵循小陀峰命名法 onClick

//需要改变组件的状态（数据），页面会自动更新
class Tab extends React.Component{
    constructor(props){
        super(props)  //只要子组件类写了constructor,就一定要调用super,
        //super当作函数的时候，就是父组件的
        this.state = {
            color : 'red'
        }
    }
 
    //强烈推荐，箭头函数定义时已经确定了this的指向
    clickHandle = ()=>{
        console.log(this);
        //只是改变了对象的属性，并没有去更新页面
        // this.state.color = 'green';

        //更新视图，调用setState,设置更新的数据，内部会调用render函数
        this.setState({
            color:'green'
        })
    }
    /**
    在更新的时候不像原生的innerHTML一样，把所有的都清空，然后重新生成元素
    在react中每次调用render都会生出一个对象的形式，前一个次和后依次对象进行对比（DOM diff），
    找到数据更新的部分，在视图中更新数据对应的元素渲染，其他的元素并不会重新渲染，以最小的代价更新dom
    */
    render(){
        return (
            <div>
                <p style={{color:this.state.color}}>改变我的颜色吧</p>
                <button onClick={this.clickHandle}>改变颜色</button>
            </div>
        )
    }
}

export default Tab;