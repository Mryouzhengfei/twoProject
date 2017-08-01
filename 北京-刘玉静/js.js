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


// 2. 写出至少两种数组去重的函数
/*
Array.prototype.unquie = function () {
    var obj = {};
    this.forEach(function (item,index) {
        obj[item] = index;
    });
    var result = [];
    for (key in obj){
        result.push(key);
    }
    return result;
};
*/
// Array.prototype.unquie = function () {
//
//     var result = [];
//     this.forEach(function (item) {
//         if (result.indexOf(item) === -1){
//             result.push(item);
//         }
//     });
//     return result;
// };

// Array.prototype.unquie = function () {
//
//     var result = [];
//
//     for (var i=0;i<this.length;i++){
//         for (var j=i+1;j<this.length;j++){
//             if (this[i]===this[j]){
//                 j = ++i;
//             }
//         }
//         result.push(this[i]);
//     }
//     return result;
// };

// Array.prototype.unquie = function () {
//     var obj = {};
//     var result = [];
//     for (var i=0;i<this.length;i++){
//
//         if (obj[this[i]] !== 1){
//             obj[this[i]] = 1;
//             result.push(this[i]);
//         }
//     }
//     return result;
// };
// console.log(["123",123,44,55,44,87,44].unquie());

// console.log([1]===[1]);



var datas = ["第1个","第2个","第3个","第4个","第5个","第6个","第7个","第8个","第9个","第10个"];
var ul = document.createElement("ul");

datas.forEach(function (item,index) {
    var li = document.createElement("li");
    li.innerHTML = "<h3>"+item+"</h3><p>"+item+"</p>"
    li.onclick = function () {
      ul.removeChild(this);
    };
    ul.appendChild(li);
});
document.body.appendChild(ul);

document.querySelector(".qq-input").onblur = function () {
  var request = new XMLHttpRequest();
  request.open("GET","http://route.showapi.com/863-1?showapi_appid=40091&showapi_sign=2b66a43022b444ad81e18ad18996cefc&qq="+this.value);
  request.onload = function () {
        var obj = JSON.parse(this.response);
        document.querySelector(".result").textContent = obj.showapi_res_body.desc;
  };
  request.send();
};