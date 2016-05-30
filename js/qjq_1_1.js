var cart_num=document.getElementById("cart_num");
var cartul=document.getElementById("cartul");
var lis=cartul.getElementsByTagName('li');
var x=lis.length-2;
cart_num.innerHTML=x;
var li_b_1=document.getElementById('li_b_1');
var close_1=document.getElementById("close_1");
li_b_1.onmouseover=function(){
	close_1.src="images/qjq_1_1_H_7_28.jpg";
}
li_b_1.onmouseout=function(){
	close_1.src="images/qjq_1_1_H_6_18.jpg";
}
close_1.onclick=function(){
	li_b_1.style.display="none";
	x=x-1;
	cart_num.innerHTML=x;
}
var li_b_2=document.getElementById('li_b_2');
var close_2=document.getElementById("close_2");
li_b_2.onmouseover=function(){
	close_2.src="images/qjq_1_1_H_7_28.jpg";
}
li_b_2.onmouseout=function(){
	close_2.src="images/qjq_1_1_H_6_18.jpg";
}
close_2.onclick=function(){
	li_b_2.style.display="none";
	x=x-1;
	cart_num.innerHTML=x;
}
var  li_b_3=document.getElementById('li_b_3');
var  close_3=document.getElementById("close_3");
 li_b_3.onmouseover=function(){
	 close_3.src="images/qjq_1_1_H_7_28.jpg";
}
 li_b_3.onmouseout=function(){
	 close_3.src="images/qjq_1_1_H_6_18.jpg";
}
 close_3.onclick=function(){
	 li_b_3.style.display="none";
	 x=x-1;
	 cart_num.innerHTML=x;
}
var h_outer=document.getElementById("h_outer");
var ban_close=document.getElementById("ban_close");
ban_close.onclick=function(){
	// h_outer.innerHTML="";
	h_outer.style.display="none";
}
window.onload=function (){
	var oDiv=document.getElementById("h_wrap");
	var oCon=document.getElementById("h_con");
	var aimgs=oCon.getElementsByTagName("img");
	var timer=null;
	var timer2=null;
	var num=1;
	function move(num){
		clearInterval(timer);
		for (var j=0; j<aimgs.length; j++){
			aimgs[j].style.opacity=0;
		}
		var ind=0;
		timer=setInterval(function (){
			ind+=0.02;
			if (ind>=1){
				ind=1;
				clearInterval(timer);
			}
			aimgs[num].style.opacity=ind;
		},50);
	}
	function automove() {
		num++;
		if (num>=aimgs.length){
			num=0;
			move(num);
		};
		move(num);
	};
	timer2=setInterval(automove,2000);
}
var c_title=document.getElementById("c_title");
var hs=c_title.getElementsByTagName('h2');
var c_con=document.getElementById("c_con");
var divs=c_con.getElementsByTagName('div');
for (var i = 0; i < hs.length; i++) {
	hs[i].onclick=function(){
		for (var i = 0; i < hs.length; i++) {
			if (hs[i]==this) {
				hs[i].className="c_select";
				divs[i].className="c_show";
			}else{
				hs[i].className="";
				divs[i].className="";
			}
		};
	}
};
var c_show_wrap=document.getElementById("c_show_wrap");
var c_show_con=document.getElementById("c_show_con");
var imgs=c_show_con.getElementsByTagName('img');
var c_con_left=document.getElementById("c_con_left");
var c_con_right=document.getElementById("c_con_right");
var timer1=null;
var imgw=imgs[0].offsetWidth+36;
var x=0;
function go(){
	timer1=setInterval(function(){
		c_show_wrap.scrollLeft++;
		if (c_show_wrap.scrollLeft==imgw*4) {
			c_show_wrap.scrollLeft=0;
		};
	},10)
}
go();
c_show_wrap.onmouseover=function(){
	clearInterval(timer1);
}
c_show_wrap.onmouseout=function(){
	clearInterval(timer1);
	go();
}
var c_title1=document.getElementById("c_title1");
var hs1=c_title1.getElementsByTagName('h2');
var c_con1=document.getElementById("c_con1");
var divs1=c_con1.getElementsByTagName('div');
for (var i = 0; i < hs1.length; i++) {
	hs1[i].onclick=function(){
		for (var i = 0; i < hs.length; i++) {
			if (hs1[i]==this) {
				hs1[i].className="c_select1";
				divs1[i].className="c_show1";
			}else{
				hs1[i].className="";
				divs1[i].className="";
			}
		};
	}
}
var c_show_wrap1=document.getElementById("c_show_wrap1");
var c_show_wrap2=document.getElementById("c_show_wrap2");
var c_show_con1=document.getElementById("c_show_con1");
var imgss=c_show_con1.getElementsByTagName('img');
var c_con_left1=document.getElementById("c_con_left1");
var c_con_right1=document.getElementById("c_con_right1");
var timer2=null,timer3=null;
var x=0;
function everygo() {
	clearInterval(timer2);
		var start=c_show_wrap2.scrollLeft;//起始位置
		var end=(imgs[0].offsetWidth+36)*x;//结束位置
		var step=0;
		// var maxstep=20;//最大步数
		var everystep=(end-start)/20;//每一步走的距离
		timer2=setInterval(function() {
			step++;
			if (step>=20) {
				clearInterval(timer2);
				step=0;
				//当走完二十步的时候清掉计时器
			};
			start+=everystep;
			c_show_wrap2.scrollLeft=start;//每过十毫秒左滚动距离加上每步走的距离
			// wrap.scrollLeft+=everystep;
		},10)
	};
function autogo() {
		clearInterval(timer3);
		timer3=setInterval(function() {
		x++; 
		if (x>=imgs.length/2+1) {
			x=0; 
		};
		everygo();
	},2000)
};
 autogo();
c_con_left1.onclick=function() {
		clearInterval(timer2);                                                                       
		clearInterval(timer3);
		x++;
		if (x>=imgs.length/2+1) {
			x=0;
		};
		everygo();
		autogo();
	};
c_con_right1.onclick=function() {
		clearInterval(timer2);
		clearInterval(timer3);
		x--;
		if (x<0) {
			x=imgs.length/2-1;
		};
		everygo();
		autogo();
};
var c_dis_ul=document.getElementById("c_dis_ul");
var liss=c_dis_ul.getElementsByTagName("li");
var c_dis_right1=document.getElementById("c_dis_right1");
var divss=c_dis_right1.getElementsByTagName('div');
for (var i = 0; i < liss.length; i++) {
	liss[i].onclick=function(){	
		for (var i = 0; i < liss.length; i++) {
		     if (liss[i]==this) {
		     	liss[i].className="c_dis_change";
		     	divss[i].className="c_dis_show";
		     }else{
		     	liss[i].className="";
		     	divss[i].className="";
		     }
		};
	}
};
