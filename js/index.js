function clickTran(ele,target){
	for(var i = 0; i < ele.length; i++){
		ele[i].addEventListener("click",function(){
			for(var j = 0; j < ele.length; j++){
				ele[j].classList.remove(target);
			}
			this.classList.add(target);
		});
	}
}

// 主导航事件
(function(){
	var themeNavA = document.querySelectorAll(".theme-nav > li");
	for (var i = 0; i < themeNavA.length; i++) {
		themeNavA[i].addEventListener("mouseover",function(){
			for(var j = 0; j < themeNavA.length; j++){
				themeNavA[j].classList.remove("active");
			}
			this.classList.add("active");
			var submenu = this.getElementsByClassName("theme-submenu")[0];
			submenu.style.display = "block";
			this.addEventListener("mouseout",function(){
				this.classList.remove("active");
				submenu.style.display = "none";
			});
		});
	}

	var themeSubmenu = document.querySelectorAll(".theme-submenu > li");
	console.info(themeSubmenu.length);
	for (var i = 0; i < themeSubmenu.length; i++) {
		themeSubmenu[i].addEventListener("mouseover",function(){
			for(var j = 0; j < themeSubmenu.length; j++){
				themeSubmenu[j].classList.remove("active");
			}
			this.classList.add("active");
			this.addEventListener("mouseout",function(){
				this.classList.remove("active");
			});
		});
	}
	
	var themeNav = document.querySelector(".theme-nav");
	var body = document.body;
	body.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop;
		if(scrollTop >= 200){
			themeNav.classList.add("float");
		}else{
			themeNav.classList.remove("float");
		}
	}
})();

// 成功案例
(function(){
	var caseTypeLi = document.querySelectorAll(".successful-case-type > li");
	clickTran(caseTypeLi,"active");
})();

// 新闻中心
(function(){
	var newsNav = document.querySelectorAll(".news-nav > li");
	clickTran(newsNav,"target");
})();