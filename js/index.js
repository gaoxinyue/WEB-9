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
window.onload = function() {



/*****/
	var slider2 = document.getElementById("slider2");
	slider2.style.top = "0";
	slider2.onmouseout = function(){
		time = setInterval(animate2, 30);
	}
	slider2.onmouseover = function(){
		clearInterval(time);
	}

	function animate2(){
		var cur = parseInt(slider2.style.top) - 1;
		slider2.style.top = cur + "px";
		if(parseInt(slider2.style.top) < -364){ /* 28px*13 */
			slider2.style.top = "0px";
		}
	}
	var time = setInterval(animate2, 30);
/******/

/********/

	var winScro = document.getElementsByClassName("winScro")[0];
	window.onscroll = function(){
	    var st = document.documentElement.scrollTop || document.body.scrollTop;
	    if(st > 100){
	        winScro.style.position = "fixed";
	        winScro.style.left = "0";
	        winScro.style.top = "0";
	    } else {
	        winScro.style.position = "static";
	    }
	}

/********/

	var selectNum = document.getElementsByClassName("selectNum")[0];
	var moneyNum = document.getElementsByClassName("moneyNum")[0];
	selectNum.onchange = function(){
	    moneyNum.innerHTML = "￥" + selectNum.value;
	}
/********/


/********/
	var w12 = document.getElementsByClassName("w12")[0];
	w12.onmouseover = function(){
	    w12.style.right = "0px";
	}
	w12.onmouseout = function(){
	    w12.style.right = "-86px";
	}


	var w3 = document.getElementsByClassName("w3")[0];
	w3.onmouseover = function(){
	    w3.style.right = "0px";
	}
	w3.onmouseout = function(){
	    w3.style.right = "-86px";
	}

	var w45 = document.getElementsByClassName("w45")[0];
	var w5 = document.getElementsByClassName("w5")[0];
	var er1 = document.getElementsByClassName("er1")[0];
	var er2 = document.getElementsByClassName("er2")[0];
	er2.style.display = "none";
	w45.onmouseover = function(){
	    w45.style.right = "0px";
	    er1.style.display = "none";
	    er2.style.display = "block";
	}
	w45.onmouseout = function(){
	    w45.style.right = "-86px";
	    er1.style.display = "block";
	    er2.style.display = "none";
	}

	var w6 = document.getElementsByClassName("w6")[0];
	w6.onmouseover = function(){
	    w6.style.right = "0px";
	}
	w6.onmouseout = function(){
	    w6.style.right = "-86px";
	}
}
/********/