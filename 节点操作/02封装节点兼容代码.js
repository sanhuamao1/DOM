//获取任意一个父级元素的第一个子元素
function getFirstElementChild(e){
    if(e.firstElementChild){//---支持
        return e.firstElementChild
    }else{
        //获取第一个子节点
        var node=e.firstChild
        //判断是否为标签
        while(node&&node.nodeType!=1){
            //如果不是标签则赋值为下一个兄弟节点
            node=node.nextSibling
        }
        return node
    }
}

//获取任意一个父级元素的最后一个子元素
function getLastElementChild(e){
    if(e.lastElementChild){//---支持
        return e.lastElementChild
    }else{
        //获取第一个子节点
        var node=e.lasttChild
        //判断是否为标签
        while(node&&node.nodeType!=1){
            //如果不是标签则赋值为下一个兄弟节点
            node=node.previousSibling
        }
        return node
    }
}
