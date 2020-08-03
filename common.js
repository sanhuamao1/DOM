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



/*
*元素解绑事件兼容函数
*@params  element object类型；
*@params  type string类型；事件类型
*@params  fn 函数类型；处理函数
*/
function removeEventListener(element,type,fn){
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn)
    }else{
        element["on"+type]=null
    }
}

//获取向上卷曲出去的距离
function getScroll(){
    return{
        //根据浏览器端兼容性写成：
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
    }
}