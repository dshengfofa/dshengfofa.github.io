﻿  function GetQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则
    var context = "";  
    if (r != null)  
         context = r[2];  
    reg = null;  
    r = null;  
    return context == null || context == "" || context == "undefined" ? "" : context;  
}
if(GetQueryString("v")==1){
document.write("<li><a href='http://player.youku.com/embed/XMzA2NDg5OTQ2OA==' target='donghua'>星雲大師《金剛經大義》【全集】</a></li>");
}
if(GetQueryString("v")==2){
document.write("<li><a href='http://player.youku.com/embed/XMjYzMzMzODAyNA==' target='donghua'>《金刚经》 第一讲</a></li>",








}
if(GetQueryString("v")==3){
document.write("<li><a href='http://player.youku.com/embed/XMjgyNjM4MzUwNA==' target='donghua'>断烦恼的金刚经（第一讲）--妙华法师_高清</a></li>",

"<li><a href='http://player.youku.com/embed/XMjgyNjI5NjIxNg==' target='donghua'>断烦恼的金刚经（第二讲）---妙华法师_高清</a></li>",

"<li><a href='http://player.youku.com/embed/XMjY4Nzk4NDE3Mg==' target='donghua'>断烦恼的金刚经（第三讲）--妙华法师</a></li>",

"<li><a href='http://player.youku.com/embed/XMjgyNjM1ODUyOA==' target='donghua'>断烦恼的金刚经（第四讲）---妙华法师_高清</a></li>",

"<li><a href='http://player.youku.com/embed/XMzYxNTYyNDUxNg==' target='donghua'>断烦恼的金刚经（第五讲）--妙华法师_高清</a></li>",

"<li><a href='http://player.youku.com/embed/XMjgyNjMwMDExNg==' target='donghua'>断烦恼的金刚经（第六讲）--妙华法师_高清</a></li>",

"<li><a href='http://player.youku.com/embed/XMjY4ODAwNTcwOA==' target='donghua'>断烦恼的金刚经（第七讲）---妙华法师</a></li>",

"<li><a href='http://player.youku.com/embed/XMjY4ODAxMTg2MA==' target='donghua'>断烦恼的金刚经（第八讲）---妙华法师</a></li>");
}
if(GetQueryString("v")==4){
document.write("<li><a href='http://player.youku.com/embed/XMjY0MDk0MDQzNg==' target='donghua'>北京大学 刘丰教授《金刚经与科学》完整版_佛学讲座_超清</a></li>");
}
if(GetQueryString("v")==5){
document.write(




























































































































}
if(GetQueryString("v")==6){
document.write(










































}