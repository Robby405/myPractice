//入口文件
import fn from './1';
import style from './1.css';
let a = 3;

console.log(a+fn());

if(module.hot){
    module.hot.accept();
}