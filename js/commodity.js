window.onload = function() {

	// 页面向下滑到100px后，上方的搜索框固定定位
	var winScro = document.getElementsByClassName("winScro")[0];
	window.onscroll = function(){
	    var st = document.documentElement.scrollTop || document.body.scrollTop;
	    if(st > 100){
	        winScro.style.position = "fixed";
	        winScro.style.left = "0";
	        winScro.style.top = "0";
	    }else{
	        winScro.style.position = "static";
	    }
	}
	// 页面向下滑结束

	// 放大镜，选择下方的小图片或箭头更改img1与img2
	var box = document.getElementById("box");
	var img1 = document.getElementById("img1");
	var slider = document.getElementById("slider");
	var img2 = document.getElementById("img2");
	var bimg = document.getElementById("Bimg");

	var choiceimage1 = document.getElementsByClassName("choice-image1")[0];
	var choiceimage2 = document.getElementsByClassName("choice-image2")[0];
	var leftSrow = document.getElementsByClassName("left-srow")[0];
	var rightSrow = document.getElementsByClassName("right-srow")[0];

	img1.onmouseover = function() {
		slider.style.display = "block";
		img1.style.border = "1px solid #676660";
		img2.style.display = "block";
	}

	img1.onmouseout = function() {
		slider.style.display = "none";
		img1.style.border = "none";
		img2.style.display = "none";
	}

	img1.onmousemove = function(e) {
		var e = e || window.event; 
		var left = e.clientX - box.offsetLeft - slider.offsetWidth/2;
		var top = e.clientY - box.offsetTop - slider.offsetHeight/2;

		var maxLeft = img1.offsetWidth - slider.offsetWidth;
		var maxTop = img1.offsetHeight - slider.offsetHeight;

		left = left > maxLeft?maxLeft:left < 0?0:left;
		top = top > maxTop?maxTop:top<0?0:top;

		slider.style.left  = left + "px";
		slider.style.top = top + "px";

		var w = left/maxLeft;
		var h = top/maxTop;

		var bimgMaxLeft = img2.offsetWidth - bimg.offsetWidth;
		var bimgMaxTop = img2.offsetHeight - bimg.offsetHeight;

		bimg.style.left = bimgMaxLeft * w + "px";
		bimg.style.top = bimgMaxTop * h + "px";
	}


	choiceimage1.onmouseover = function() {
		img1.firstElementChild.src = "../images/pp0.jpeg";
		bimg.src = "../images/pp0.jpeg";
	}
	choiceimage2.onmouseover = function() {
		img1.firstElementChild.src = "../images/pp1.jpeg";
		bimg.src = "../images/pp1.jpeg";
	}
	leftSrow.onclick = function() {
		img1.firstElementChild.src = "../images/pp0.jpeg";
		bimg.src = "../images/pp0.jpeg";
	}
	rightSrow.onclick = function() {
		img1.firstElementChild.src = "../images/pp1.jpeg";
		bimg.src = "../images/pp1.jpeg";
	}
	// 放大镜结束

	// 选择不同的净含量按钮，更改按钮形态以及下方文字
	var button1 = document.getElementsByClassName("button1")[0];
	var button2 = document.getElementsByClassName("button2")[0];
	var haosheng = document.getElementsByClassName("haosheng")[0];
	button1.onclick = function(){
		button1.style.border = "1px solid #ff0000";
		button2.style.border = "none";
		button1.style.background = "url(../images/duigou.png) no-repeat bottom right";
		button2.style.background = "none";
		haosheng.innerHTML = '"'+ parseInt(button1.value) + "ml" + '"';
	}
	button2.onclick = function(){
		button1.style.border = "none";
		button2.style.border = "1px solid #ff0000";
		button1.style.background = "none";
		button2.style.background = "url(../images/duigou.png) no-repeat bottom right";
		haosheng.innerHTML = '"'+ parseInt(button2.value) + "ml" + '"';
	}
	// 选择不同的净含量结束

	// 选择数量改变加、减按钮的状态以及数量按钮中的内容
	var jian = document.getElementsByClassName("jian")[0];
	var num = document.getElementsByClassName("num")[0];
	var jia = document.getElementsByClassName("jia")[0];
	jian.onclick = function(){
		if(num.value > 1){
			num.value = num.value - 1;
			jian.style.cursor = "pointer";
			jia.style.cursor = "pointer";
		} else if(num.value == 1){
			jian.style.cursor = "not-allowed";
			jia.style.cursor = "pointer";
		} else{
			jian.style.cursor = "pointer";
			jia.style.cursor = "pointer";
		} 
	}
	jia.onclick = function(){
		if(num.value < 5){
			num.value = parseInt(num.value) + 1;
			jian.style.cursor = "pointer";
			jia.style.cursor = "pointer";
		} else if(num.value == 5){
			jian.style.cursor = "pointer";
			jia.style.cursor = "not-allowed";
		} else{
			jian.style.cursor = "pointer";
			jia.style.cursor = "pointer";
		} 
	}
	// 选择数量结束

	// 点击加入购物车，出现蒙罩，点击选项退出蒙罩
	var jiarugouwuche = document.getElementsByClassName("jiarugouwuche")[0];
	var Mengzhao = document.getElementsByClassName("Mengzhao")[0];
	var chance = document.getElementsByClassName("chance")[0];
	var chanceguanbi = document.getElementsByClassName("chanceguanbi")[0];
	var jixu = document.getElementsByClassName("jixu")[0];
	var jiesuan = document.getElementsByClassName("jiesuan")[0];
	jiarugouwuche.onclick = function(){
		Mengzhao.style.display = "block";
		chance.style.display = "block";
	}

	jixu.onclick = guanbi;
	jiesuan.onclick = guanbi;
	chanceguanbi.onclick = guanbi;
	function guanbi(){
		Mengzhao.style.display = "none";
		chance.style.display = "none";
	}
	// 点击加入购物车结束
}
