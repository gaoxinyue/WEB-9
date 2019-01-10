window.onload = function() {

	// 页面向下滑到100px后，上方的搜索框固定定位
	var winScro = document.getElementsByClassName("winScro")[0];
	var w12 = document.getElementsByClassName("w12")[0];
	window.onscroll = function(){
	    var st = document.documentElement.scrollTop || document.body.scrollTop;
	    if(st > 100){
	        winScro.style.position = "fixed";
	        winScro.style.left = "0";
	        winScro.style.top = "0";
	        w12.style.zIndex = "3";
	    } else {
	        winScro.style.position = "static";
	    }
	}
	// 页面向下滑结束

	// 大轮播图开始
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, null)[attr];
		}
	}
	function animate(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var isStop = true;
			for(var attr in json){
				var now = 0;
				if(attr == "opacity"){
					now = parseInt(getStyle(obj,attr)*100);
				}else{
					now = parseInt(getStyle(obj,attr));
				}
				var speed = (json[attr] - now) / 8;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				var cur = now + speed;
				if(attr == "opacity"){
					obj.style[attr] = cur / 100;
				}else{
					obj.style[attr] = cur + "px";
				}
				if(json[attr] !== cur){
					isStop = false;
				}
			}
			if(isStop){
				clearInterval(obj.timer);
				callback&&callback();
			}
		}, 30)
	}

	var box = document.getElementById('box');
	var oNavlist = document.getElementById('nav').children;
	var slider = document.getElementById('slider');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var index = 1;
	var timer;
	var isMoving = false;
	box.onmouseover = function(){
		animate(left,{opacity:100})
		animate(right,{opacity:100})
		clearInterval(timer)
	}
	box.onmouseout = function(){
		animate(left,{opacity:0})
		animate(right,{opacity:0})
		timer = setInterval(next, 1000);
	}
	right.onclick = next;
	left.onclick = prev;
	for( var i=0; i<oNavlist.length; i++ ){
		(function(i){
			oNavlist[i].onclick = function(){
				index = i+1;
				navmove();
				animate(slider,{left:-800*index});
			}
		})(i);
	}
	function next(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index++;
		navmove();
		animate(slider,{left:-800*index},function(){
			if(index==7){
				slider.style.left = '-800px';
				index = 1;
			}
			isMoving = false;
		});
	}
	function prev(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index--;
		navmove();
		animate(slider,{left:-800*index},function(){
			if(index==0){
				slider.style.left = '-4800px';
				index = 6;
			}
			isMoving = false;
		});
	}
	function navmove(){
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].className = "";
		}
		if(index >6 ){
			oNavlist[0].className = "active";
		}else if(index<=0){
			oNavlist[5].className = "active";
		}else {
			oNavlist[index-1].className = "active";
		}
	}
	timer = setInterval(next, 1000);
	// 大轮播图结束

	// 小轮播图开始
	var slider2 = document.getElementById("slider2");
	slider2.style.top = "0";
	slider2.onmouseout = function(){
		time = setInterval(animate2, 20);
	}
	slider2.onmouseover = function(){
		clearInterval(time);
	}

	function animate2(){
		var now = parseInt(slider2.style.top);
		if(parseInt(slider2.style.top) === -364){ /* 28px*13 */
			slider2.style.top = "0px";
		} else {
			var cur = now - 1;
			slider2.style.top = cur + "px";
		}
	}
	var time = setInterval(animate2, 20);
	// 小轮播图结束

	// 选择充值数改变文字内容开始
	var selectNum = document.getElementsByClassName("selectNum")[0];
	var moneyNum = document.getElementsByClassName("moneyNum")[0];
	selectNum.onchange = function(){
	    moneyNum.innerHTML = "￥" + selectNum.value;
	}
	// 选择充值数结束


	var w12 = document.getElementsByClassName("w12")[0];
	var w3 = document.getElementsByClassName("w3")[0];
	var w45 = document.getElementsByClassName("w45")[0];
	var w5 = document.getElementsByClassName("w5")[0];
	var er1 = document.getElementsByClassName("er1")[0];
	var er2 = document.getElementsByClassName("er2")[0];
	var w6 = document.getElementsByClassName("w6")[0];
	er2.style.display = "none";
	
	w12.onmouseover = function(){
	    animate(w12, {right:0});
	}
	w12.onmouseout = function(){
	    animate(w12, {right:-86});
	}
	w3.onmouseover = function(){
	    animate(w3, {right:0});
	}
	w3.onmouseout = function(){
	    animate(w3, {right:-86});
	}
	w45.onmouseover = function(){
	    er1.style.display = "none";
	    er2.style.display = "block";
	    animate(w45, {right:0});
	}
	w45.onmouseout = function(){
	    er1.style.display = "block";
	    er2.style.display = "none";
	    animate(w45, {right:-86});
	}
	w6.onmouseover = function(){
	    animate(w6, {right:0});
	}
	w6.onmouseout = function(){
	    animate(w6, {right:-86});
	}
}
