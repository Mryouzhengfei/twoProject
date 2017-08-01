/**
 * Created by Administrator on 2017/7/31.
 */
/*
*
* prototype(原型)是什么,它是怎么使用的
 怎么样创建元素节点和文本节点,怎么样删除节点
 怎样通过js给某个节点对象添加属性和属性值
 Js查找元素的几种方式
 开始 将按钮的文字变成结束 再次点击 再次切换为开始
 使用正则 删除里面的 特殊符号 “W^%R&E第三。！方*E”
 写出程序运行的结果？
 for(i=0, j=0; i<10, j<6; i++, j++){ k = i + j; } (function() {   var a = b = 5;   })();  console.log(b); a b 的值
 写出两种继承的方式
 写一个url格式验证的正则
 prototype(原型)是什么,它是怎么使用的
*
* */

// div.setAttribute("class","box")

console.log("W^%R&E第三。！方*E".replace(/[!@#$%^&*！。]/g,""));
// for(i=0, j=0; i<10, j<6; i++, j++){
//     k = i + j;
// }
// console.log(k,i,k);

console.log(/(https|http):\/\/www\..+\..+/.test("https://www.baidu.com?name=小明"));