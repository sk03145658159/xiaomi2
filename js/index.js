//购物车
window.onload=function(){
	let shop=document.getElementsByClassName("shop")[0];
	let shopbox=document.getElementsByClassName("shopbox")[0];
	let a=shop.getElementsByTagName("a")[0];
	a.onmouseenter=function(){
		shopbox.style.height="99px";
	}
	a.onmouseleave=function(){
		shopbox.style.height=0;
	}
//家电
	let bigBox=document.getElementsByClassName("bigBox")[0];
	let con1=bigBox.getElementsByClassName("con1");
	let smallTit=bigBox.getElementsByClassName("smallTit")[0];
	let opt=smallTit.getElementsByClassName("opt");
	for(let i=0;i<opt.length;i++){
		opt[i].onmouseenter=function(){
			for(let j=0;j<opt.length;j++){
				con1[j].style.display="none";
				opt[j].style.color="#333";
				opt[j].style.borderBottom="none";
			}
			con1[i].style.display="block";
			opt[i].style.color="#ff6700";
			opt[i].style.borderBottom="2px solid #ff6700";
		}
	}
//侧导航
	let aside=document.getElementsByClassName("aside")[0];
	let box3=aside.getElementsByClassName("box");
	let xiangqing3=aside.getElementsByClassName("xiangqing");
	for(let i=0;i<box3.length;i++){
		box3[i].onmouseenter=function(){
			for(let j=0;j<box3.length;j++){
				xiangqing3[j].style.display="none";
			}
			xiangqing3[i].style.display="block";
		}
		box3[i].onmouseleave=function(){
			xiangqing3[i].style.display="none";
		}
	}
/*function ssk(sss){
	let con1=sss.getElementsByClassName("con1");
	let smallTit=sss.getElementsByClassName("smallTit")[0];
	let opt=smallTit.getElementsByClassName("opt");
	for(let i=0;i<opt.length;i++){
		opt[i].onmouseenter=function(){
			for(let j=0;j<opt.length;j++){
				con1[j].style.display="none";
			}
			con1[i].style.display="block";
		  }
		}
	}
let zhiNeng=document.getElementsByClassName("zhiNeng")[0];
ssk(zhiNeng);*/
//智能
	let zhiNeng=document.getElementsByClassName("zhiNeng")[0];
	let opt1=zhiNeng.getElementsByClassName("opt");
	let con2=zhiNeng.getElementsByClassName("con1");
	for(let i=0;i<opt1.length;i++){
		opt1[i].onmouseenter=function(){
			for(let j=0;j<opt1.length;j++){
				con2[j].style.display="none";
				opt1[j].style.color="#333";
				opt1[j].style.borderBottom="none";
			}
			con2[i].style.display="block";
			opt1[i].style.color="#ff6700";
			opt1[i].style.borderBottom="2px solid #ff6700";
		}
	}
//搭配
	/*let daPei=document.getElementsByClassName("daPei")[0];
	let smalltit=daPei.getElementsByClassName("smalltit");
	let con3=daPei.getElementsByClassName("con1");
	console.log(con3);
	for(let i=0;i<smalltit.length;i++){
		smalltit[i].onmouseenter=function(){
			for(let j=0;j<smalltit.length;j++){
				con3[j].style.display="none";
				smalltit[j].style.color="#333";
				smalltit[j].style.borderBottom="none";
			}
			con3[i].style.display="block";
			smalltit[i].style.color="#ff6700";
			smalltit[i].style.borderBottom="2px solid #ff6700";
		}
	}*/
	function ssk(kuaiName){
	let smalltit=kuaiName.getElementsByClassName("smalltit");
	let con3=kuaiName.getElementsByClassName("con1");
	console.log(con3);
	for(let i=0;i<smalltit.length;i++){
		smalltit[i].onmouseenter=function(){
			for(let j=0;j<smalltit.length;j++){
				con3[j].style.display="none";
				smalltit[j].style.color="#333";
				smalltit[j].style.borderBottom="none";
			}
			con3[i].style.display="block";
			smalltit[i].style.color="#ff6700";
			smalltit[i].style.borderBottom="2px solid #ff6700";
		}
	}
  }
  let daPei=document.getElementsByClassName("daPei")[0];
  ssk(daPei);
//配件
  let peiJian=document.getElementsByClassName("peiJian")[0];
  ssk(peiJian);
//周边
  let zhouBian=document.getElementsByClassName("zhouBian")[0];
  ssk(zhouBian);
//上导航
  let bigLogo=document.getElementsByClassName("bigLogo")[0];
  let box=bigLogo.getElementsByClassName("box");
  let con4=bigLogo.getElementsByClassName("con4");
  for(let i=0;i<8;i++){
  	box[i].onmouseenter=function(){
  		for(let j=0;j<8;j++){
  			con4[j].style.boxShadow="none";
  			con4[j].style.borderTop=0;
  			con4[j].style.display="none";
  		}
  		con4[i].style.display="block";
  		con4[i].style.height="230px";
  		con4[i].style.borderTop="2px solid #e0e0e0";
  		con4[i].style.boxShadow="0 5px 5px 0 #e0e0e0";
  	}
  	box[i].onmouseleave=function(){
  		con4[i].style.height=0;
  		con4[i].style.borderTop=0;
  	}
  }
}