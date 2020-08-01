
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

## 知识点小结
- innerText：只要是成对的标签，设置中间的文本时，都使用这个【案例2】
- document.getElementsByTagName("标签的名字")：根据标签名字获取标签，返回一个伪数组【案例4】
- 在某个元素的事件中，自己的事件中的this就是当前这个元素的对象【案例6】
- 排他功能，即点击一个事件前会重置标签的属性【案例7】
- 标签属性的特性【案例10】
- 封装根据元素id获取元素的函数及引用【common.js】【案例11】
- 只读readonly与禁用disabled；表单标签的内容可用value赋值【案例12】
- 在js使用css样式时，属性的写法不大一样：需要把-去掉，再把后面的单词首字母大写【案例13】
- 点击按钮后改变按钮的value，即实现按钮值的切换【案例14】