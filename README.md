# 2017-7-31-jsTest
## js考试
### 笔试
> 1. prototype(原型)是什么,它是怎么使用的
>> 是一个原型对象 所有函数都具备这个原形对象 是一个共享的空间，可以通过原型对象 可以给某个类 扩展方法或者属性，可以通过改变原型对象 实现继承

> 2. 怎么样创建元素节点和文本节点,怎么样删除节点
>> document.createElement();
document.createTextNode();
>> document.body.removeChild(document.querySelector(".box"));

> 3. 怎样通过js给某个节点对象添加属性和属性值 
>> setAttribute("class","box")

> 4. Js查找元素的几种方式
>> document.querySelector();
   document.querySelectorAll();
   document.getElementsByClassName()
   document.getElementsByName()
   document.getElementsByTagName()
   document.getElementById()
>> document.getElementsByClassName()

> 5. <button>开始</button> 将按钮的文字变成结束  再次点击 再次切换为开始
>> document.querySelector("button").onclick = function () {
       this.textContent = this.textContent==="开始"?"结束":"开始";
>> };

> 6. 使用正则 删除里面的 特殊符号 “W^%R&E第三。！方*E”
>> "W^%R&E第三。！方*E".replace(/[!@#$%^&*！。]/g,"")

> 7. 写出程序运行的结果？
>> for(i=0, j=0; i<10, j<6; i++, j++){
 k = i + j;
}
>> k=10

> 8. 写出 a b 的值
>> (function() {
var a = b = 5;
})();
>> console.log(a,b); a=undefined b=5

> 9. 写出两种继承的方式
>> 原型继承 混合继承

> 10. 写一个url格式验证的正则
>> 1. / (https | http)    :      \/ \/   www   \.    .+          \.     .+ /
>> 2. https或者http  普通冒号  /   /   www   .   非换行字符    .   非换行字符
### 编程
> 1. 实现全选、 反选 点击弹出选择内容
> 2. 写出至少两种数组去重的函数
> 3. 使用js创建10个li  没给个li添加点击事件 获取
> 4. 写一个姓名测缘分的案例 使用https://www.showapi.com/api/lookPoint/1314 把测试结果展示在界面上
> 5. 写一个找不同的小游戏 点击显示图案 如果有两个相同 则消除 直到全部消除 提示成功