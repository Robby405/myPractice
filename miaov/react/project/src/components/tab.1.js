import React from 'react';
//事件要遵循小陀峰命名法

//需要改变组件的状态（数据），页面会自动更新
class Tab extends React.Component{
    constructor(props){
        super(props)  //只要子组件类写了constructor,就一定要调用super,
        //super当作函数的时候，就是父组件的
        this.state = {
            color : 'red'
        }
        //只初始化一次，推荐
        this.clickHandle = this.clickHandle.bind(this)  //bind改变this指向
    }
    clickHandle(){
        console.log('执行了');
        console.log(this); //undefined

        //react中不提倡直接操作DOM，事件触发的函数不指向一个函数
        //按原生的来说，事件触发的时候事件处理函数，指向的是触发事件的元素
        // this.state.color = 'green';
       
    }
    //强烈推荐，箭头函数定义时已经确定了this的指向
    clickHandle2 = ()=>{
        console.log(this);
    }
    render(){
        return (
            <div>
                <p style={{color:this.state.color}}>改变我的颜色吧</p>
                {/* <button onClick={this.clickHandle.bind(this)}>改变颜色</button> */}
                <button onClick={this.clickHandle}>改变颜色</button>
                <button onClick={this.clickHandle2}>改变颜色</button>
            </div>
        )
    }
}

export default Tab;