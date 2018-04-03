{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	let banner_lanniu=document.querySelector(".banner_lanniu");
	let banner_ranniu=document.querySelector(".banner_ranniu");
	// console.dir(imgs[0].classList.add"a")
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			//this  ele   pagers[index]
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		// console.log(1)
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		pagers[n].classList.add("active");
		imgs[n].classList.add("active");
	};//每个setInterval都有一个编号
	banner.onmouseenter=function(){
		clearInterval(t);//清除setInterval
	};
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};
	let flag=true;
	banner_ranniu.onclick=function(){
		if(flag){
			flag=false;
			move();
		}		
	};
	banner_lanniu.onclick=function(){
		if(flag){
		flag=false;
		n-=2;
		move();
		}
	};
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
}
{
	const prev=document.querySelector(".star_btn1");
	const next=document.querySelector(".star_btn2");
	const star_bottom=document.querySelector(".star_bottom");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		star_bottom.style.marginLeft=-1226*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		star_bottom.style.marginLeft=-1226*n+"px";
	}
}
{	
	function content(parent){
	const types=parent.querySelectorAll(".type");
	const goods=parent.querySelectorAll(".zhineng_content");
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
			for(let i=0;i<types.length;i++){
				types[i].classList.remove("active");
				goods[i].classList.remove("active");
			}
			this.classList.add("active");
			goods[index].classList.add("active");
		}
		})
	}
	const contentList=document.querySelectorAll(".dapei");
	contentList.forEach(function(ele){
		content(ele);
	})
}
{
	const prev=document.querySelector(".tuijian_btn1");
	const next=document.querySelector(".tuijian_btn2");
	const tuijian_bottom=document.querySelector(".tuijian_bottom");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===3){
			this.classList.add("disable");
		}
		if(n===4){
			n=3;
			return;
		}
		tuijian_bottom.style.marginLeft=-1226*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		tuijian_bottom.style.marginLeft=-1226*n+"px";
	}
}
{	function neirong_item(parent){
	const prev=parent.querySelector(".neirong_lanniu");
	const next=parent.querySelector(".neirong_ranniu");
	const neirong_content=parent.querySelector(".neirong_content");
	const content=parent.querySelectorAll(".content_list");
	const pagers=parent.querySelectorAll(".dot");
	let n=0;
	next.onclick=function(){
		n++;
		if(n===content.length){
			n=content.length-1;
			return;
		}	
		neirong_content.style.marginLeft=-296*n+"px";
		pagers[n].classList.add("active");
		pagers[n-1].classList.remove("active");
	}
	let obj;
	prev.onclick=function(){
		n--;
		if(n<0){
			n=0;
			return;
		}
		neirong_content.style.marginLeft=-296*n+"px";
		pagers[n].classList.add("active");
		pagers[n+1].classList.remove("active");
		};
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj=pagers[n];
				obj.classList.remove("active");
				this.classList.add("active");
				obj=this;
				neirong_content.style.marginLeft=-296*index+"px";
				n=index;
			}
		})
	}
	const contentList=document.querySelectorAll(".neirong_item");
	contentList.forEach(function(ele){
		neirong_item(ele);
	})
}
{
	let labels=document.querySelectorAll(".nav1_list");
	let menus=document.querySelectorAll(".nav1_menu");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
{
	let top=document.querySelector(".nav_word");
	let bottom=document.querySelector(".nav_bottom");
	let box=document.querySelector(".box");
		top.onmouseenter=function(){
			bottom.style.height="205.25px";
			bottom.style.borderTop="1px solid #ccc";
		}
		box.onmouseleave=function(){
			bottom.style.height=0;
			bottom.style.borderTop=0;
		}
	const titles=document.querySelectorAll(".nav_word>span");
	const lists=document.querySelectorAll(".nav_bottom_list");
		titles.forEach(function(ele,index){
			ele.onmouseenter=function(){
			for(let i=0;i<titles.length;i++){
				lists[i].classList.remove("move");
			}
			lists[index].classList.add("move");
		}
		})
}
{
	let buy=document.querySelector(".head_buy")
	let menu=document.querySelector(".cart-menu")
    buy.onmouseenter=function () {
        menu.style.height="83px";
        menu.style.display="block";
    }
    buy.onmouseleave=function () {
        menu.style.height=0;
        menu.style.display="none";
    }
}