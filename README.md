
# js分三个部分：
- ECMAScript标准：Js的基本的语法
- **DOM：Document Object Model——文档对象模型——操作页面元素**
- BOM:Browser Object Model——刘览器对象模型——操作的是浏览器


# 概念
- **文档**：一个页面就是一个文档，文档中有根元素——html——根元素
- **元素（element）**：页面中所有的标签都是元素，元素可以看成是对象。标签可以嵌套，标签中有标签，元素中有元素
- **节点（node）**：页面中所有的内容都是节点，标签 属性 文本
- **root:根**

****由文档及文档中的所有元素（标签）组成的树形结构，叫做DOM树****

![]([C:\Users\13433\Desktop\u=973985953,435444580&fm=26&gp=0.jpg](https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=dom%E6%A0%91&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=973985953,435444580&os=3752920962,4144196870&simid=3477964545,276361370&pn=0&rn=1&di=1650&ln=583&fr=&fmq=1596248736789_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2Fimages0.cnblogs.com%2Fblog2015%2F159998%2F201508%2F241258004366878.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined))

# 操作页面例子引入

> 按钮被点击，弹出对话框
> - 按钮：事件源
> - 点击：事件名称（onclick）
> - 被点：触发
> - 弹框：响应



```html
<!-- html与js一起写。这里alert是一个js代码 -->
<input type="buttom" value="点击" onclick="alert('你触发了事件')"/>
```
```html
<!-- html与js分离  版本1 -->
<input type="buttom" value="点击" onclick="f1()"/>
<script>
	function f1(){
        alert('你触发了事件')"
    }
</script>
```
```html
<!-- html与js分离  版本2 -->
<input type="buttom" value="点击" id="btn"/>
<script>
function f1(){
    alert('你触发了事件')"
}

var btnObj=document.getElementById("btn")//根据id值获取元素对象
btnObj.onclick=f1()//为对象添加事件
</script>
```
```html
<!-- html与js分离  版本3 简约-->
<input type="buttom" value="点击" id="btn"/>
<script>
document.getElementById("btn").onclick=function(){
    alert("你触发了事件")
}
</script>
```

# [案例小结](https://github.com/sanhuamao1/DOM/tree/master)
> dom的内容主要是通过案例理解的，每个案例包含相应的知识点。由于案例比较多，我把内容存储到了github，可以根据自身取药选择学习
- innerText，给成对的标签添加文本 ***[案例2](https://github.com/sanhuamao1/DOM/blob/master/02%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E4%BF%AE%E6%94%B9p%E6%A0%87%E7%AD%BE%E7%9A%84%E5%86%85%E5%AE%B9.html)***
- document.getElementsByTagName("标签的名字")：根据标签名字获取标签，返回一个伪数组 ***[案例4](https://github.com/sanhuamao1/DOM/blob/master/04%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E4%BF%AE%E6%94%B9%E6%89%80%E6%9C%89p%E6%A0%87%E7%AD%BE%E7%9A%84%E5%86%85%E5%AE%B9.html)***
- 在某个元素的事件中，自己的事件中的this就是当前这个元素的对象 ***[案例6](https://github.com/sanhuamao1/DOM/blob/master/06.%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E6%94%B9%E5%8F%98%E6%8C%89%E9%92%AE%E5%B1%9E%E6%80%A7.html)***
- 排他功能，即点击一个事件前会重置标签的属性 [***案例7***](https://github.com/sanhuamao1/DOM/blob/master/07%E6%8C%89%E9%92%AE%E7%9A%84%E6%8E%92%E4%BB%96%E5%8A%9F%E8%83%BD.html)
- 表单标签属性的特性 ***[案例10](https://github.com/sanhuamao1/DOM/blob/master/10%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E8%87%AA%E5%8A%A8%E9%80%89%E6%8B%A9%E6%80%A7%E5%88%AB.html)***
- 封装根据元素id获取元素的函数及引用 [***common.js***](https://github.com/sanhuamao1/DOM/blob/master/common.js) [***案例11***](https://github.com/sanhuamao1/DOM/blob/master/11%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E9%80%89%E4%B8%AD%E4%B8%8B%E6%8B%89%E6%A1%86%E7%9A%84%E5%80%BC.html)
- 只读readonly与禁用disabled；表单标签的内容可用value赋值 ***[案例12](https://github.com/sanhuamao1/DOM/blob/master/12%E6%96%87%E6%9C%AC%E5%9F%9F%E5%92%8C%E6%8C%89%E9%92%AE%E7%9A%84%E7%9B%B8%E5%85%B3%E5%B1%9E%E6%80%A7.html)***
- 在js使用css样式时：需要把-去掉，再把后面的单词首字母大写 [***案例13***](https://github.com/sanhuamao1/DOM/blob/master/13%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E4%BF%AE%E6%94%B9div%E6%A0%B7%E5%BC%8F.html)
- 点击按钮实现按钮值的切换 ***[案例14](https://github.com/sanhuamao1/DOM/blob/master/14%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E6%98%BE%E7%A4%BA%E5%92%8C%E9%9A%90%E8%97%8Fdiv.html)***
- 在js代码中DOM操作设置元素类样式的时候，不用class关键字，而是用className。通常用于修改多个样式的情况 ***[案例15](https://github.com/sanhuamao1/DOM/blob/master/15%E9%80%9A%E8%BF%87%E7%B1%BB%E8%BD%AC%E5%8F%98%E6%A0%B7%E5%BC%8F.html)***
- 通过判断类样式是否存在来修改类样式 ***[案例16](https://github.com/sanhuamao1/DOM/blob/master/16div%E7%9A%84%E6%98%BE%E7%A4%BA%E5%92%8C%E9%9A%90%E8%97%8F%E9%80%9A%E8%BF%87%E7%B1%BB%E6%A0%B7%E5%BC%8F%E5%AE%9E%E7%8E%B0.html)***
- 用三元表达式简化类样式切换及body标签的获取 ***[案例17](https://github.com/sanhuamao1/DOM/blob/master/17%E9%A1%B5%E9%9D%A2%E5%BC%80%E5%85%B3%E7%81%AF.html)***
- 阻止超链接默认跳转，使用return false ***[案例18](https://github.com/sanhuamao1/DOM/blob/master/18%E9%98%BB%E6%AD%A2%E8%B6%85%E9%93%BE%E6%8E%A5%E9%BB%98%E8%AE%A4%E8%B7%B3%E8%BD%AC.html)***
- 实现相册 ***[案例19](https://github.com/sanhuamao1/DOM/blob/master/19%E5%AE%9E%E7%8E%B0%E7%9B%B8%E5%86%8C.html)***
- 根据表单标签的name属性获取元素——getElementsByName('name的属性值') ***[案例20](https://github.com/sanhuamao1/DOM/blob/master/20%E6%A0%B9%E6%8D%AEname%E5%B1%9E%E6%80%A7%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0.html)***
- 根据类样式的名称获取元素——getElementsByClassName('样式名称') ***[案例21](https://github.com/sanhuamao1/DOM/blob/master/21%E6%A0%B9%E6%8D%AE%E7%B1%BB%E6%A0%B7%E5%BC%8F%E7%9A%84%E5%90%8D%E7%A7%B0%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0.html)***
- 鼠标进入onmouseover与离开事件onmouseout ***[案例22](https://github.com/sanhuamao1/DOM/blob/master/22%E9%BC%A0%E6%A0%87%E8%BF%9B%E5%85%A5%E4%B8%8E%E7%A6%BB%E5%BC%80.html)***
- 搜索框获取焦点onfocus与失去焦点onblur ***[案例23](https://github.com/sanhuamao1/DOM/blob/master/23%E6%90%9C%E7%B4%A2%E6%A1%86%E8%8E%B7%E5%8F%96%E7%84%A6%E7%82%B9%E4%B8%8E%E5%A4%B1%E5%8E%BB%E7%84%A6%E7%82%B9.html)***
- **自定义属性操作**。getAttribute("属性名")获取属性值；setAttribute(字符串属性，属性值)设置新的属性值；removeAttribute("属性名")，移除属性，也可以移出非自定义的属性比如class ***[案例24](https://github.com/sanhuamao1/DOM/blob/master/24%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7%E6%93%8D%E4%BD%9C.html)*** 
- tab切换，结合上面三个方法 [***案例25***](https://github.com/sanhuamao1/DOM/blob/master/25tab%E5%88%87%E6%8D%A2.html)


# 冗杂知识点梳理
## 1. 获取元素的方式
- document.getElementById('id属性值')——根据id属性值获取，返回一个
- document.getElementsByTagName('标签名称')——根据标签名获取，返回一个伪数组
- document.getElementsByName('name的属性值')——根据name的属性获取，返回一个伪数组
- document.getElementsByClassName('类名称')——根据类名称获取，返回一个伪数组
- document.querySelector('选择器名称')——根据选择器获取，返回一个
- document.querySelectorAll('选择器名称')——根据选择器获取，返回伪数组


## 2. 设置标签中的文本内容
- textContext：谷歌，火狐支持
- innerText：兼容性较好，谷歌，火狐，IE支持
  ***兼容性封装——设置任意标签中间的文本内容***
  ```js
  function setInnerText(element,text){
      //判断浏览器是否支持
      if(typeof element.textContent=="undefined"){
          element.innerText=text
      }else{
          element.textContext=text
      }

  }
  ```
  ***兼容性封装—获取任意标签中间的文本内容***
  ```js
    function getInnerText(element){
      if(typeof element.textContent=="undefined"){
          return element.innerText;
      }else{
          return element.textContext;
      }

  }
  ```

 ## 3. innerHtml
  可以设置html标签内容，比如`obj.innerHtml="<p>这个标签可以被解析</p>"`，还会获取到标签。而innerText只能获取文本内容，且不能获取标签

 ## 4. 节点
***属性***
  - nodeType：1----标签；2----属性；3---文本
  - nodeName：标签节点---大写的标签名字；属性节点---小写的属性名字；文本节点---#text
  - nodeValue：标签节点---null；属性节点---属性值；文本节点---文本内容


***parentNode：父级节点***
  ```html
  <div>
      <span></span>
      <p></p>
      <ul id="ul"></ul>
  </div>

  <script>
    var ul=document.getElementById("ul")
    //打印下方四项可得
    console.log(ul.parentNode)//<div>...</div>
    console.log(ul.parentNode.nodeType)//1
    console.log(ul.parentNode.nodeName)//DIV
    console.log(ul.parentNode.nodeValue)//null
  </script>
  ```


***childNodes：子节点***
```html
 <div id="div">
     <span></span>
     <p></p>
     <ul id="ul"></ul>
 </div>

 <script>
   var div=document.getElementById("div")
   console.log(div.childNodes)//NodeList(7) [text, span, text, p, text, ul#ul, text]
 </script>
  ```
***其他***
- .parentElement---父级元素
- .children---子元素
- .firstChild---第一个子节点
- .firstElementChild---第一个子元素
- .lastChild---最后一个子节点
- .lastElementChild---最后一个子节点