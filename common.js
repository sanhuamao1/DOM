/*
*根据id的值返回对应的标签元素
*@params id string类型
*@return {Element}
*/
function myobj(id){
    return document.getElementById(id)
}


/*
*textContent与innerText的兼容性处理，设置标签内容
*@params  element object类型；
*@params  text string类型
*/
function setInnerText(element,text){
    //判断浏览器是否支持
    if(typeof element.textContent=="undefined"){
        element.innerText=text
    }else{
        element.textContent=text
    }

}


/*
*textContent与innerText的兼容性处理，获取标签内容
*@params  element object类型；
*/
function getInnerText(element){
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }

}

/*
*元素绑定事件兼容函数
*@params  element object类型；
*@params  type string类型；事件类型
*@params  fn 函数类型；处理函数
*/
function addEventListener(element,type,fn){
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn)
    }else{
        element["on"+type]=fn
    }
}