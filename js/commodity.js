window.onload = function() {

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

/**************/

	var box = document.getElementById("box");
	var img1 = document.getElementById("img1");
	var slider = document.getElementById("slider");
	var img2 = document.getElementById("img2");
	var bimg = document.getElementById("Bimg");

	var text = document.getElementsByClassName("commodity-left-top-text")[0]; 
	var choiceimage1 = document.getElementsByClassName("choice-image1")[0];
	var choiceimage2 = document.getElementsByClassName("choice-image2")[0];
	var image11 = document.getElementsByClassName("image11")[0];
	var image12 = document.getElementsByClassName("image12")[0];

	img1.onmouseover = function() {
		slider.style.display = "block";
		img2.style.display = "block";
		text.style.display = "none";
	}

	img1.onmouseout = function() {
		slider.style.display = "none";
		img2.style.display = "none";
		text.style.display = "block";
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
		image11.style.display = "block";
		image12.style.display = "none";
		bimg.src = "../images/pp0.jpeg";
	}
	choiceimage2.onmouseover = function() {
		image11.style.display = "none";
		image12.style.display = "block";
		bimg.src = "../images/pp1.jpeg";
	}




/**************/

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


/****************/
	var jian = document.getElementsByClassName("jian")[0];
	var num = document.getElementsByClassName("num")[0];
	var jia = document.getElementsByClassName("jia")[0];
	// var jia = document.getElementsByClassName("jia")[0];
	jian.onclick = function(){
		if(num.value > 1){
			num.value = num.value - 1;
		} else if(num.value == 1){
			jian.style.cursor = "not-allowed";
		} else{
			jian.style.cursor = "pointer";
			jia.style.cursor = "pointer";
		} 
	}
	jia.onclick = function(){
		if(num.value < 5){
			num.value = parseInt(num.value) + 1;
		} else if(num.value == 5){
			jia.style.cursor = "not-allowed";
		} else{
			jian.style.cursor = "pointer";
			jia.style.cursor = "pointer";
		} 
	}

// ******
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
}

// ******