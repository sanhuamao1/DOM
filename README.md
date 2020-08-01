
# js分三个部分：
- ECMAScript标准：Js的基本的语法
- **DOM：Document Object Model——文档对象模型——操作页面元素**
- BOM:Browser Object Model——刘览器对象模型——操作的是浏览器


# 概念
- **文档**：一个页面就是一个文档，文档中有根元素——html——根元素
- **元素（element）**：页面中所有的标签都是元素，元素可以看成是对象。标签可以嵌套，标签中有标签，元素中有元素
- **节点（node）**：页面中所有的内容都是节点，标签 属性 文本
- **root:根**

由文档及文档中的所有元素（标签）组成的树形结构，**叫做DOM树**

![]([C:\Users\13433\Desktop\u=973985953,435444580&fm=26&gp=0.jpg](https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=dom%E6%A0%91&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=973985953,435444580&os=3752920962,4144196870&simid=3477964545,276361370&pn=0&rn=1&di=1650&ln=583&fr=&fmq=1596248736789_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2Fimages0.cnblogs.com%2Fblog2015%2F159998%2F201508%2F241258004366878.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined))

## 一个例子
> 按钮被点击，弹出对话框

- 按钮：事件源
- 点击：事件名称（onclick）
- 被点：触发
- 弹框：响应

```html
<!-- html与js一起写。这里alert是一个js代码 -->
<input type="buttom" value="点击" onclick="alert('你触发了事件')"/>


<!-- html与js分离——版本1——在html上写事件 -->
<input type="buttom" value="点击" onclick="f1()"/>
<script>
	function f1(){
        alert('你触发了事件')"
    }
</script>


// html与js分离——版本2——在js上写事件
<input type="buttom" value="点击" id="btn"/>
<script>
    function f1(){
        alert('你触发了事件')"
    }
var btnObj=document.getElementById("btn")//根据id值在文档中找到标签，返回一个元素对象
btnObj.onclick=f1()//为对象添加事件(方法)
</script>

// html与js分离——版本3——简约清晰版（上面用的是命名函数，可能会重复，改进：）
<input type="buttom" value="点击" id="btn"/>
<script>
document.getElementById("btn").onclick=function(){
    alert("你触发了事件")
}
</script>
```

## 案例小结
- innerText：只要是成对的标签，设置中间的文本时，都使用这个【案例2】
- document.getElementsByTagName("标签的名字")：根据标签名字获取标签，返回一个伪数组【案例4】
- 在某个元素的事件中，自己的事件中的this就是当前这个元素的对象【案例6】
- 排他功能，即点击一个事件前会重置标签的属性【案例7】
- 表单标签属性的特性【案例10】
- 封装根据元素id获取元素的函数及引用【common.js】【案例11】
- 只读readonly与禁用disabled；表单标签的内容可用value赋值【案例12】
- 在js使用css样式时：需要把-去掉，再把后面的单词首字母大写【案例13】
- 点击按钮实现按钮值的切换【案例14】
- 在js代码中DOM操作设置元素类样式的时候，不用class关键字，而是用className。通常用于修改多个样式的情况【案例15】
- 通过判断类样式是否存在来修改类样式【案例16】
- 用三元表达式简化类样式切换及body标签的获取【案例17】
- 阻止超链接默认跳转，使用return false【案例18】
- 实现相册【案例19】
- 根据表单标签的name属性获取元素——getElementsByName('name的属性值')【案例20】
- 根据类样式的名称获取元素——getElementsByClassName('样式名称')【案例21】
- 鼠标进入onmouseover与离开事件onmouseout【案例22】
- 搜索框获取焦点onfocus与失去焦点onblur【案例23】
- **自定义属性操作**。getAttribute("属性名")获取属性值；setAttribute(字符串属性，属性值)设置新的属性值；removeAttribute("属性名")，移除属性，也可以移出非自定义的属性比如class【案例24】  
- tab切换【案例25】


## 知识点整理
### 1. 获取元素的方式
- document.getElementById('id属性值')——根据id属性值获取，返回一个
- document.getElementsByTagName('标签名称')——根据标签名获取，返回一个伪数组
- document.getElementsByName('name的属性值')——根据name的属性获取，返回一个伪数组
- document.getElementsByClassName('类名称')——根据类名称获取，返回一个伪数组
- document.querySelector('选择器名称')——根据选择器获取，返回一个
- document.querySelectorAll('选择器名称')——根据选择器获取，返回伪数组


### 2. 设置标签中的文本内容
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

  ### 3. innerHtml
  可以设置html标签内容，比如`obj.innerHtml="<p>这个标签可以被解析</p>"`，还会获取到标签。而innerText只能获取文本内容，且不能获取标签

