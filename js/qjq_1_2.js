
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

$(function(){	

$('#brand2  span').click(function(){
	$(this).toggleClass('checked');
})
$('.sort li').click(function(){
	$(this).toggleClass('red');
})
$('.sort2 .aa').click(function(){
	$(this).toggleClass('checkeds');
})
$('.sort2 .bb').click(function(){
	$(this).toggleClass('checkedss');
})
var a=1;
$('.add').click(function(){
	a++;
	var b=a;
	$('.cart_num1')[0].innerHTML=b;
	$('.reduce').click(function(){
	b--;	
	if (b<=0) {
		b=0;		
	};
	$('.cart_num1')[0].innerHTML=b;
})
})

})
