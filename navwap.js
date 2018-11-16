(function() {
	var baseFontSize=100;
	var baseWidth=320;
	var clientWidth=document.documentElement.clientWidth||window.innerWidth;
	var innerWidth=Math.max(Math.min(clientWidth,480),320);
	var rem=100;
	if(innerWidth>362&&innerWidth<=375)
	{rem=Math.floor(innerWidth/baseWidth*baseFontSize*0.9)
	}
	if(innerWidth>375){
	rem=Math.floor(innerWidth/baseWidth*baseFontSize*0.84)
	}
	window.__baseREM=rem;document.querySelector("html").style.fontSize=rem+"px";
	window.addEventListener("touchstart",function(){});
}());

document.write("<link type='text/css' rel='stylesheet' href='http://dongshenfofa.top/style.css' /><div class='header'><p>冬参佛法</p></div><div class='box02'><div class='box02_1'><ul><li><a href='http://dongshenfofa.top/wap.html'>首页</a></li><li><a href='http://dongshenfofa.top/wap.html'>视频</a></li><li id='menu8' onclick='setTab('menu',8,8)'><a href='#'>经阁</a></li><li><a href='http://dongshenfofa.top/jiangzuo/wap.html'>讲座</a></li><li><a href='http://dongshenfofa.top/jingji/wap.html?f=8&v=20001'>语录</a></li><li><a href='http://dongshenfofa.top/2/wenku/wap.html?f=8&v=30000'>文库</a></li><li><a href='http://dongshenfofa.top/3/wap.html?f=8'>学佛</a></li><li><a href='http://dongshenfofa.top/3/xiouwap.html?f=8' style='padding:0 .06rem;'>修证</a></li><li><a href='http://dongshenfofa.top' style='padding:0 .06rem;'>菜单</a></li><li><a href='http://dongshenfofa.top' style='padding:0 .06rem;'>菜单</a></li></ul></div></div>");
document.write("<script src='http://dongshenfofa.top/scroll2.js'></script>");