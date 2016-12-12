var aDates = [
	'快过年了，大家看看去哪玩吧',
	'我们去踏青吧',
	'杭州西湖',
	'端午情怀',
	'六月飞雪',
	'7日7夜情',
	'中秋赏月',
	'秋天去看枫叶吧',
	'十面埋伏',
	'深秋似春',
	'又到年底了',
	'快来年终总结吧'

]
window.onload = function(){
	var oLi = document.getElementsByTagName('li');
	var oText = document.getElementById('tab').getElementsByTagName('div')[0];

	var i = 0;
		
	for(i = 0;i<oLi.length;i++){
		oLi[i].index = i;
		oLi[i].onmouseover = function(){
			for(i = 0;i<oLi.length;i++){
				oLi[i].className = '';
			}
			this.className = 'active';
			oText.innerHTML = '<h2>'+(this.index+1)+'月活动</h2><p>'+aDates[this.index]+'</p>';
		}
		
	}
		
}