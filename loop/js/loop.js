window.onload = function(){
	var oDiv = document.getElementById('roll');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var oBtn = oDiv.getElementsByTagName('a');

	var iSpeed = -2;
	var timer = null;

	//复制一份li实现无缝滚动
	oUl.innerHTML+=oUl.innerHTML;
	//ul的总宽度=每个li的宽度*li的个数的总和
	oUl.style.width = aLi[0].offsetWidth*aLi.length+'px';

	timer=setInterval(function(){
		oUl.style.left = oUl.offsetLeft + iSpeed + 'px';

		//当滚动到ul的一半宽度时，让ul的left=0重新开始
		if(oUl.offsetLeft<-oUl.offsetWidth/2){
			oUl.style.left = '0px';
		}
		else if(oUl.offsetLeft>0){
			oUl.style.left =-oUl.offsetWidth/2 + 'px';
		}
	},30);

	oBtn[0].onmouseover = function(){
		iSpeed = -2;
	}
	oBtn[1].onmouseover = function(){
		iSpeed = +2;
	}

	//鼠标移入关闭定时器
	oUl.onmouseover = function(){
		clearInterval(timer);
	}
	//鼠标移出开启定时器
	oUl.onmouseout = function(){
		timer=setInterval(function(){
		oUl.style.left = oUl.offsetLeft + iSpeed + 'px';

		//当滚动到ul的一半宽度时，让ul的left=0重新开始
		if(oUl.offsetLeft<-oUl.offsetWidth/2){
			oUl.style.left = '0px';
		}
		else if(oUl.offsetLeft>0){
			oUl.style.left =-oUl.offsetWidth/2;
		}
	},30);
	}
}