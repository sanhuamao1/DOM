
# js分三个部分：
- ECMAScript标准：Js的基本的语法
- **DOM：Document Object Model——文档对象模型——操作页面元素**
- BOM:Browser Object Model——刘览器对象模型——操作的是浏览器


# 概念
- **文档**：一个页面就是一个文档，文档中有根元素——html——根元素
- **元素（element）**：页面中所有的标签都是元素，元素可以看成是对象。标签可以嵌套，标签中有标签，元素中有元素
- **节点（node）**：页面中所有的内容都是节点，标签，属性，文本。即元素属于节点的一部分。
- **root:根**

****由文档及文档中的所有元素（标签）组成的树形结构，叫做DOM树****

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200801173238392.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FhYWFhcGlwaQ==,size_16,color_FFFFFF,t_70)


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
> dom的内容主要是通过案例理解的，偏操作性。这里每个案例都包含相应的知识点。由于案例比较多，我把内容存储到了github，可以点击案例小结获取全部案例。根据自身需要学习。每个案例都会有相应注释帮助理解
- innerText，给成对的标签添加文本 [案例2](https://github.com/sanhuamao1/DOM/blob/master/02%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E4%BF%AE%E6%94%B9p%E6%A0%87%E7%AD%BE%E7%9A%84%E5%86%85%E5%AE%B9.html)
- document.getElementsByTagName("标签的名字")：根据标签名字获取标签，返回一个伪数组 [案例4](https://github.com/sanhuamao1/DOM/blob/master/04%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E4%BF%AE%E6%94%B9%E6%89%80%E6%9C%89p%E6%A0%87%E7%AD%BE%E7%9A%84%E5%86%85%E5%AE%B9.html)
- 在某个元素的事件中，自己的事件中的this就是当前这个元素的对象 [案例6](https://github.com/sanhuamao1/DOM/blob/master/06.%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E6%94%B9%E5%8F%98%E6%8C%89%E9%92%AE%E5%B1%9E%E6%80%A7.html)
- 排他功能，即点击一个事件前会重置标签的属性 [案例7](https://github.com/sanhuamao1/DOM/blob/master/07%E6%8C%89%E9%92%AE%E7%9A%84%E6%8E%92%E4%BB%96%E5%8A%9F%E8%83%BD.html)
- 表单标签属性的特性 [案例10](https://github.com/sanhuamao1/DOM/blob/master/10%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E8%87%AA%E5%8A%A8%E9%80%89%E6%8B%A9%E6%80%A7%E5%88%AB.html)
- 封装根据元素id获取元素的函数及引用 [common.js](https://github.com/sanhuamao1/DOM/blob/master/common.js) [案例11](https://github.com/sanhuamao1/DOM/blob/master/11%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E9%80%89%E4%B8%AD%E4%B8%8B%E6%8B%89%E6%A1%86%E7%9A%84%E5%80%BC.html)
- 只读readonly与禁用disabled；表单标签的内容可用value赋值 [案例12](https://github.com/sanhuamao1/DOM/blob/master/12%E6%96%87%E6%9C%AC%E5%9F%9F%E5%92%8C%E6%8C%89%E9%92%AE%E7%9A%84%E7%9B%B8%E5%85%B3%E5%B1%9E%E6%80%A7.html)
- 在js使用css样式时：需要把-去掉，再把后面的单词首字母大写 [案例13](https://github.com/sanhuamao1/DOM/blob/master/13%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E4%BF%AE%E6%94%B9div%E6%A0%B7%E5%BC%8F.html)
- 点击按钮实现按钮值的切换 [案例14](https://github.com/sanhuamao1/DOM/blob/master/14%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E6%98%BE%E7%A4%BA%E5%92%8C%E9%9A%90%E8%97%8Fdiv.html)
- 在js代码中DOM操作设置元素类样式的时候，不用class关键字，而是用className。通常用于修改多个样式的情况 [案例15](https://github.com/sanhuamao1/DOM/blob/master/15%E9%80%9A%E8%BF%87%E7%B1%BB%E8%BD%AC%E5%8F%98%E6%A0%B7%E5%BC%8F.html)
- 通过判断类样式是否存在来修改类样式 [案例16](https://github.com/sanhuamao1/DOM/blob/master/16div%E7%9A%84%E6%98%BE%E7%A4%BA%E5%92%8C%E9%9A%90%E8%97%8F%E9%80%9A%E8%BF%87%E7%B1%BB%E6%A0%B7%E5%BC%8F%E5%AE%9E%E7%8E%B0.html)
- 用三元表达式简化类样式切换及body标签的获取 [案例17](https://github.com/sanhuamao1/DOM/blob/master/17%E9%A1%B5%E9%9D%A2%E5%BC%80%E5%85%B3%E7%81%AF.html)
- 阻止超链接默认跳转，使用return false [案例18](https://github.com/sanhuamao1/DOM/blob/master/18%E9%98%BB%E6%AD%A2%E8%B6%85%E9%93%BE%E6%8E%A5%E9%BB%98%E8%AE%A4%E8%B7%B3%E8%BD%AC.html)
- 实现相册 [案例19](https://github.com/sanhuamao1/DOM/blob/master/19%E5%AE%9E%E7%8E%B0%E7%9B%B8%E5%86%8C.html)
- 根据表单标签的name属性获取元素——getElementsByName('name的属性值') [案例20](https://github.com/sanhuamao1/DOM/blob/master/20%E6%A0%B9%E6%8D%AEname%E5%B1%9E%E6%80%A7%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0.html)
- 根据类样式的名称获取元素——getElementsByClassName('样式名称') [案例21](https://github.com/sanhuamao1/DOM/blob/master/21%E6%A0%B9%E6%8D%AE%E7%B1%BB%E6%A0%B7%E5%BC%8F%E7%9A%84%E5%90%8D%E7%A7%B0%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0.html)
- 鼠标进入onmouseover与离开事件onmouseout [案例22](https://github.com/sanhuamao1/DOM/blob/master/22%E9%BC%A0%E6%A0%87%E8%BF%9B%E5%85%A5%E4%B8%8E%E7%A6%BB%E5%BC%80.html)
- 搜索框获取焦点onfocus与失去焦点onblur[案例23](https://github.com/sanhuamao1/DOM/blob/master/23%E6%90%9C%E7%B4%A2%E6%A1%86%E8%8E%B7%E5%8F%96%E7%84%A6%E7%82%B9%E4%B8%8E%E5%A4%B1%E5%8E%BB%E7%84%A6%E7%82%B9.html)
- **自定义属性操作**。getAttribute("属性名")获取属性值；setAttribute(字符串属性，属性值)设置新的属性值；removeAttribute("属性名")，移除属性，也可以移出非自定义的属性比如class [案例24](https://github.com/sanhuamao1/DOM/blob/master/24%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7%E6%93%8D%E4%BD%9C.html)
- tab切换，结合上面三个方法 [案例25](https://github.com/sanhuamao1/DOM/blob/master/25tab%E5%88%87%E6%8D%A2.html)


# 一些梳理
---
## DOM对象获取元素的方法
- `document.getElementById('id属性值')`——根据id属性值获取，返回一个
- `document.getElementsByTagName('标签名称')`——根据标签名获取，返回一个伪数组
- `document.getElementsByName('name的属性值')`——根据name的属性获取，返回一个伪数组
- `document.getElementsByClassName('类名称')`——根据类名称获取，返回一个伪数组
- `document.querySelector('选择器名称')`——根据选择器获取，返回一个
- `document.querySelectorAll('选择器名称')`——根据选择器获取，返回伪数组


## 设置标签中的文本内容
- textContext
- innerText
  **兼容性封装——设置任意标签中间的文本内容**
	 ```js
	 function setInnerText(element,text){
	    //判断浏览器是否支持
	    if(typeof element.textContent=="undefined"){
	        element.innerText=text
	    }else{
	        element.textContent=text
	    }
	
	}
	 ```
  **兼容性封装—获取任意标签中间的文本内容**
   ```js
	function getInnerText(element){
	    if(typeof element.textContent=="undefined"){
	        return element.innerText;
	    }else{
	        return element.textContent;
	    }
	
	}
	 ```
 ## innerHTML
  可以设置html标签内容，比如`obj.innerHTML="<p>这个标签可以被解析</p>"`，还会获取到标签。而innerText只能获取文本内容，且不能获取标签

 # 节点
 ---
## 属性
  - nodeType
    
|节点种类| nodeType |  
|--|--|
|  元素| 1|
|  属性| 2 |
|  文本 |3 |
|  注释| 8 |
|  文档| 9 |

  
  - nodeName
    
| 节点种类 | nodeName |
|--|--|
| 标签节点 | 大写的标签名 |
| 属性节点 | 小写的属性名 |
| 文本节点 | #text |
| 文档节点 | #document |

  - nodeValue
  
| 节点种类 | nodeName |
|--|--|
| 标签节点 | undefined或者null |
| 属性节点 | 属性值 |
| 文本节点 | 文本内容|



## parentNode：父级节点
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


## childNodes：子节点
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
## 获取元素或节点的方式
- `.parentElement`---父级元素
- `.children`---子元素
- `.firstChild`---第一个子节点
- `.firstElementChild`---第一个子元素
- `.lastChild`---最后一个子节点
- `.lastElementChild`---最后一个子节点
- `.previousSibling`---某个元素的前一个兄弟节点
- `.previousElementSibling`---某个元素的前一个兄弟元素
- `.nextSibling`---某个元素的后一个兄弟元素
- `.nextElementSibling`---某个元素的后一个兄弟元素
## 创建节点的一些DOM方法
- `createElement()`——创建元素节点
- `createAttribute()`——创建属性节点
- `createTextNode()`——创建文本节点

## 案例
- [通过节点操作改变元素的背景颜色](https://github.com/sanhuamao1/DOM/blob/master/%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C/01%E6%94%B9%E5%8F%98%E8%83%8C%E6%99%AF%E9%A2%9C%E8%89%B2.html)
- [封装节点兼容代码](https://github.com/sanhuamao1/DOM/blob/master/%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C/02%E5%B0%81%E8%A3%85%E8%8A%82%E7%82%B9%E5%85%BC%E5%AE%B9%E4%BB%A3%E7%A0%81.js)
- [切换背景图片](https://github.com/sanhuamao1/DOM/blob/master/%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C/03%E5%88%87%E6%8D%A2%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87.html)
- [表格全选与全不选](https://github.com/sanhuamao1/DOM/blob/master/%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C/04%E8%A1%A8%E6%A0%BC%E5%85%A8%E9%80%89%E4%B8%8E%E5%85%A8%E4%B8%8D%E9%80%89.html)


# 元素
---
## 创建方式
1. [document.white("标签的代码及内容")](https://github.com/sanhuamao1/DOM/blob/master/%E5%85%83%E7%B4%A0%E6%A1%88%E4%BE%8B/01%E5%88%9B%E5%BB%BA%E5%85%83%E7%B4%A0%E7%9A%84%E6%96%B9%E5%BC%8F1.html)
2. [对象.innderHTML="标签及代码"](https://github.com/sanhuamao1/DOM/blob/master/%E5%85%83%E7%B4%A0%E6%A1%88%E4%BE%8B/02%E5%88%9B%E5%BB%BA%E5%85%83%E7%B4%A0%E7%9A%84%E6%96%B9%E5%BC%8F2.html)
3. [document.createElement(“标签名字”)](https://github.com/sanhuamao1/DOM/blob/master/%E5%85%83%E7%B4%A0%E6%A1%88%E4%BE%8B/04%E5%88%9B%E5%BB%BA%E5%85%83%E7%B4%A0%E7%9A%84%E6%96%B9%E5%BC%8F3.html)
	
	>案例：
	>- [用字符串拼接的方式动态创建列表](https://github.com/sanhuamao1/DOM/blob/master/%E5%85%83%E7%B4%A0%E6%A1%88%E4%BE%8B/03%E5%8A%A8%E6%80%81%E5%88%9B%E5%BB%BA%E5%88%97%E8%A1%A8-%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2.html)
	>- [用createElement的方式创建列表](https://github.com/sanhuamao1/DOM/blob/master/%E5%85%83%E7%B4%A0%E6%A1%88%E4%BE%8B/05%E5%8A%A8%E6%80%81%E5%88%9B%E5%BB%BA%E5%88%97%E8%A1%A82-%E5%88%9B%E5%BB%BA%E5%85%83%E7%B4%A0.html)
	>- [优化方式3 限制只创建一个元素](https://github.com/sanhuamao1/DOM/blob/master/%E5%85%83%E7%B4%A0%E6%A1%88%E4%BE%8B/06%E5%8F%AA%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0.html)

## 一些DOM方法
- `.appendChild`——追加子元素
- `.insertBefore(你要添加的元素，父元素.firstElementChild)`——把新的子元素添加到第一个子元素的前面
- `.removeChild(父元素.firstElementChild)`——删除父元素的第一个子元素
	>***案例***
	>[综合方法实现添加元素、删除元素和全部删除](https://github.com/sanhuamao1/DOM/blob/master/%E5%85%83%E7%B4%A0%E6%A1%88%E4%BE%8B/07%E5%85%83%E7%B4%A0%E7%9B%B8%E5%85%B3%E6%93%8D%E4%BD%9C.html)
- `.getAttribute("属性名")`——返回指定的属性值
- `.setAttribute("属性名","属性值")`——把指定属性设置或修改为指定的值
- `.removeAttribute("属性名")`——移除某一属性

## 元素绑定事件
- `addEventListener("事件类型",事件处理函数,控制事件的阶段|布尔值)`
	```js
	//这里的事件类型没有on，this是当前绑定的对象
	addEventListener('click',function(){},false)
	```

- `attachEvent(“事件类型”,事件处理函数)`
	```js
	//这里的事件类型有on，this指的是window
	attachEvent('onclick',function(){})
	```

	**兼容封装**

	```js
	function addEventListener(element,type,fn){
	    if(element.addEventListener){
	        element.addEventListener(type,fn,false);
	    }else if(element.attachEvent){
	        element.attachEvent("on"+type,fn)
	    }else{
	        element["on"+type]=fn
	    }
	}
	```
## 元素解绑事件
1. 给事件赋值`null`

	```js
	//对象.on事件名称=nul
	obj.onclick=null
	```
2. `removeEventListener`
	```js
	//注意：这种方法只能解绑命名函数事件
	//对象.removeEventListener("事件名称",命名函数,false）
	obj.removeEventListener=("click",f1,false)
	```
3. `detachEvent`
	```js
	//注意：这种方法只能解绑命名函数事件
	//对象.detachEvent("on事件名称",命名函数）
	obj.detachEvent=("onclick",f1)
	```
	**兼容封装**
	```js
	function removeEventListener(element,type,fn){
	    if(element.removeEventListener){
	        element.removeEventListener(type,fn,false);
	    }else if(element.detachEvent){
	        element.detachEvent("on"+type,fn)
	    }else{
	        element["on"+type]=null
	    }
	}
	```

## 事件的三个阶段
1. 事件捕获阶段：从外到里
2. 事件目标阶段：你选中的那一个事件触发
3. 事件冒泡阶段：从里到外

### 事件冒泡
多个元素嵌套，有层次关系，这些元素都注册了相同事件。如果里面的元素的事件触发了，外面的元素的相同事件会自动触发。事件从里到外触发。

### 事件捕获
它与事件冒泡相反。如果你点击了最内层的事件，它不会从内容开始触发，而是从外层依次往你点击的内层经过

### 阻止事件冒泡
1. 给内层元素的事件函数最后加上`window.event.cancelBubble=true`
2. 给事件传入参数`e——事件处理参数对象`，并在函数内部加上`e.stopPropagation()`

### 冒泡阶段与捕获阶段的转换
```js
//这里用到了addEventListener的第三个参数，
//这个参数可以让我们在捕获阶段和冒泡阶段切换
//冒泡阶段
obj.addEventListener("click",function(e){},false )
//冒泡阶段
obj.addEventListener("click",function(e){},true)
```

## 其他
```
document.body		//获取body标签
document.title		//获取title的值
document.documentElement		//获取html
```

# 元素拓展
### 属性

**offset系列**

- `offsetWidth`——获取元素的宽 有边框|只读

- `offsetHeight`——获取元素的高 有边框|只读

- `offsetLeft`——获取元素距离左边的距离|只读

- `offsetTopt`——获取元素距离上边的距离|只读
  
- `offsetParent`——元素的父元素，如果没有就是body元素|只读
  
  > 元素的宽高样式无法直接通过style获取，除非你在style内联属性中设置，这时候就需要offset  width和offsetheigth
  
  >在一般情况下，位置的数值=父级元素的margin+padding+border+自己的margin
  >在子绝父相脱离文档流的情况下，位置的数值=自己的位置+自己的margin





**scroll系列**
- `scrollWidth`——元素中内容的实际宽度 没有边框 如果没有内容就是元素的宽
- `scrollHeight`——元素中内容的实际高度 没有边框 如果没有内容就是元素的高
- `scrollLeft`——再有滚动条的情况下，内容隐藏的最左边的距离到可见的最左边的距离
- `scrollTop`——向上卷曲出去的距离，内容隐藏的最上边的距离到可见的最上边的距离

	```js
	//封装getScroll函数：可以获取页面向上或向左卷曲出去的距离
	function getScroll(){
	    return{
	 left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,   top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
	    }
	}
	```



**client系列**
- `clientWidth`——可视区域的宽 没有边框
- `clientHeight`——可视区域的高 没有边框
- `clientLeft`——左边框的宽度
- `clientTop`——上边框的高度
---

- `style`——获取/设置元素的style属性
- `accessKey`——获取/设置元素访问的快捷键
- `lang`——获取/设置元素属性、文本、内容的语言



- `e.onscroll=function`——获取或设置元素滚动时的事件
- `e.onchange=function`——获取或设置元素的`change`时的事件.
- `e.onblur = function`——获取或设置元素的失去焦点时的事件
- `e.onclick = function`——获取或设置元素的click时的事件
- `e.oninput = function(e)`



### 方法
- `e.blur()`——元素失去焦点
- `e.click()`——触发元素的点击事件
- `e.focus()`——元素获得焦点