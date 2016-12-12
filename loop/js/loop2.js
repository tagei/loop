window.onload = function(){
	var oDiv = document.getElementById('roll');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var oLi = oUl.getElementsByTagName('li');
	var oUp = oDiv.getElementsByTagName('div')[0];
	var oDown = oDiv.getElementsByTagName('div')[1];

	var timer=null;
	iSpeed = 0;

	oUl.innerHTML += oUl.innerHTML;

	oUp.onmousedown = function(){
		timer=setInterval(doMove,30);
		iSpeed = -2;
		// alert(1);
	}
	oDown.onmousedown = function(){
		timer = setInterval(doMove,30);
		iSpeed = +2;
	}
	oUp.onmouseup = function(){
		clearInterval(timer);
	}
	oDown.onmouseup = function(){
		clearInterval(timer);
	}
	function doMove(){
		oUl.style.top = oUl.offsetTop + iSpeed + 'px';
		if(oUl.offsetTop>0){
			oUl.style.top = -oUl.offsetHeight/2 +'px';
		}
		else if(oUl.offsetTop<-oUl.offsetHeight/2){
			oUl.style.top = '0px';
		}
	}
	
		

}