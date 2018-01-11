
// 齐翔首页.html
(function(){
    // 一线品牌的共同选择
    var choiceType = document.querySelectorAll("ul.choice-type > li");
    // console.info(choiceType);
    if(choiceType){
        for(var i=0; i<choiceType.length; i++){
            choiceType[i].addEventListener('mouseover', function(){
                for(var j=0; j<choiceType.length; j++){
                    choiceType[j].classList.remove('active');
                }
                this.classList.add('active');
            })
        }
    }

	// 新闻中心
    var conList = document.querySelector("ul.news-content-list");
    var typeLi = document.querySelectorAll("ul.news-type > li");
    if(conList&&typeLi){
        for(var i=0; i<typeLi.length; i++){
            typeLi[i].addEventListener('click', function(n){
                return function(){
                    for(var j=0; j<typeLi.length; j++){
                        typeLi[j].classList.remove('active');
                    }
                    this.classList.add('active');
                    conList.style.left = "-" + n * 100 + "%";
                }
            }.bind(this)(i))
        }
    }

    // 齐翔优势, 一目了然
    var advantage = document.querySelectorAll('ul.advantage-list > li');
    if(advantage){
        for(var i=0; i<advantage.length; i++){
            advantage[i].addEventListener('mouseenter',function(){
                // console.info(0)
                this.querySelector('div').style.transform = "scale(1.3,1.3)";
            })
            advantage[i].addEventListener('mouseleave',function(){
                // console.info(1)
                this.querySelector('div').style.transform = "scale(1,1)";
            })
        }
    }
    // 主题广告开始
    var theme = document.querySelector("section.theme");
    if(theme){
        var improtant = new NewsScroll(theme);
        improtant.spotClick();
        improtant.imgScroll();
    }

    function NewsScroll(ele){
		var _this = this;
		this.index = 0; //序列号
		this.element = {  //所有元素
			spot : ele.querySelectorAll("i"), //导航圆点
			detailsImg : ele.querySelector("ul.theme-srcoll") //新闻图片
			// text : ele.querySelectorAll("div.news-details-text"), //新闻文本
			// type : document.querySelectorAll("ul.news-type-list > li") //新闻类型
		},
		this.spotClick = function(){ //导航圆点点击方法
			// console.info(this.element.spot.length);
			for(var i = 0; i < this.element.spot.length; i++){
				this.element.spot[i].addEventListener("click",function(n){ //点击导航圆点
					return function(){
						// console.info(this);
						for(var j=0; j<this.element.spot.length; j++){
                            this.element.spot[j].classList.remove("active"); //清除导航圆点
                            // this.element.text[j].style.display = "none"; //清除文本内容
						}
                        this.element.detailsImg.style.left = "-" + n * 100 + "%"; //改变图片位置
                        // this.element.text[n].style.display = "block"; //改变文本内容
						this.element.spot[n].classList.add("active"); //为导航圆点添加样式
						clearTimeout(this.timer); //清除滚动定时
						clearTimeout(this.timer2); //清除重启滚动定时
						this.index = n; //把当前导航圆点位置 赋值 给序列号
						this.timer2 = setTimeout(this.imgScroll,5000); //重启滚动
					}.bind(this);
				}.bind(this)(i));
			}
		},
		this.imgScroll = function(){  //滚动方法
			// console.info(this);
			for(var j=0; j < _this.element.spot.length; j++){
				_this.element.spot[j].classList.remove("active"); //清除导航点
				// _this.element.text[j].style.display = "none"; //隐藏所有新闻文本
			}
			_this.element.spot[_this.index].classList.add("active"); //给当前导航点添中焦点
			_this.element.detailsImg.style.left = "-" + _this.index * 100 + "%"; //新闻图片跟随滚动
			// _this.element.text[_this.index].style.display = "block"; //显示当前新闻文本

			_this.index ++;
			if(_this.index >= _this.element.spot.length){
				_this.index = 0;  //归位
			}
			_this.timer = setTimeout(_this.imgScroll,2000); //设置滚动定时
		},
		this.switchType = function(){ //新闻类型切换方法
			// console.info(ele.parentNode);
			for(var i = 0; i < this.element.type.length; i++){
				this.element.type[i].addEventListener("click",function(n){ //点击新闻类型导航
					return function(){
						// console.info(this.element.type);
						for(var j=0; j<this.element.type.length; j++){
							this.element.type[j].classList.remove("active");
						}
						ele.parentNode.style.left = "-" + n * 100 + "%";  //类型内容切换
						this.element.type[n].classList.add("active"); //为新闻类型导航添加样式
					}.bind(this);
				}.bind(this)(i));
			}
		}
	};
})();

// 齐翔商标事务.html
(function(){
    // 商标注册常见问题答疑
    var commonType = document.querySelectorAll('ul.common-problem-type > li');
    if(commonType){
        for(var i=0; i<commonType.length;i++){
            commonType[i].addEventListener('click',function(){
                for(var j=0; j<commonType.length; j++){
                    commonType[j].classList.remove('active');
                }
                this.classList.add('active');
            })
        }
    }

    // 金牌顾问团
    var adviserList = document.querySelector('ul.T-adviser-list');
    if(adviserList){
        var adviserDot = document.querySelectorAll('p#T-adviser-dot > i');
        for(var i=0; i<adviserDot.length; i++){
            adviserDot[i].addEventListener('mouseenter',function(n){
                return function(){
                    for(var j=0; j<adviserDot.length; j++){
                        adviserDot[j].classList.remove('active');
                    }
                    this.classList.add('active');
                    switch(n){
                        case n = 0 :
                            adviserList.style.left = '-' + 0 + '%' ;
                            break;
                        case n = 1 :
                            adviserList.style.left = '-' + 50 + '%' ;
                            break;
                    }
                }
            }.bind(this)(i));
        }
    }

    // 金牌顾问团
    var trademark = document.querySelector('section.trademark');
    if(trademark){
        var processList = trademark.querySelector('div.trademark-process-list');
        var processArticle = processList.querySelectorAll('article');
        var processLine = processList.querySelector('img');
        var trademarkTop = trademark.offsetTop;
        var trademarkHeight = trademark.offsetHeight;
        var n = 0;
        var scrollTop = document.documentElement.scrollTop;//当前滚动高度
        var play = null;

        function start(){
    		if( scrollTop > trademarkTop - trademarkHeight/2 && scrollTop < trademarkTop + trademarkHeight/2  ){ //如果当前滚动高度+300 === 目标元素TOP坐标
                setTimeout(function(){
                    var deg = 0;
                    play = requestAnimationFrame(function(){
                        deg ++ ;
                        // console.info(deg);
                        processLine.style.transform = "rotate("+ deg +"deg)";
                        switch(deg){
                            case 10:
                                processArticle[0].classList.add('active');
                                break;
                            case 45:
                                processArticle[1].classList.add('active');
                                break;
                            case 90:
                                processArticle[2].classList.add('active');
                                break;
                            case 135:
                                processArticle[3].classList.add('active');
                                break;
                            case 170:
                                processArticle[4].classList.add('active');
                                break;
                        }
                        var play = requestAnimationFrame(arguments.callee);
                        if( deg >= 180 ) {
                            cancelAnimationFrame(play);
                        }
                    })
                },1000);
    			n ++ ;
    		}
        }
        //如果文档在目标元素上刷新
        start();
        //如果文档在顶部刷新，则由事件触发
        window.onscroll = function(){
            scrollTop = document.documentElement.scrollTop;
            if ( n == 1 ) { return false }; //如果执行过一次就不再执行
            start();
        }
    }

    // 立即注册享受6大免费服务
    var enjoyService = document.querySelector('div.enjoy-service-scroll > ul');
    // console.info(enjoyService.getBoundingClientRect());
    // console.info(enjoyService.offsetTop);
    if(enjoyService){
        var enjoy_LI = enjoyService.querySelectorAll('li');
        var enjoy_n = 0 ;
        var max = enjoy_LI.length * 100;
        enjoyService.style.height = max + "%" ;
        setInterval(function(){ //设置订单轮播
            enjoy_n += 100;
            if( enjoy_n >= max ) {
                enjoy_n = 0;
            }
            // console.info(enjoy_n)
            // console.info(enjoyService)
            enjoyService.style.top = "-" + enjoy_n + "%";
        },5000)
    }

    // 这些专利都能注册
    var PatentsType = document.querySelectorAll('ul.these-patents-type > li');
    if(PatentsType){
        var PatentsList = document.querySelectorAll('ul.these-patents-list > li');
        for(var i=PatentsType.length-1; i>=0; i--){
            PatentsType[i].addEventListener('click',function(n){
                return function(){
                    for(var j=PatentsList.length-1; j>=0; j--){
                        PatentsList[j].classList.remove('active');
                        PatentsType[j].classList.remove('active');
                    }
                    PatentsList[n].classList.add('active');
                    PatentsType[n].classList.add('active');
                }
            }(i))
        }
    }
})();

// /////////////////////////////////////////////////  动画效果  ///////////////////////////////////////////////
(function(){
    // 合并对象
    function extend(target, source) {
        for (var obj in source) {
            target[obj] = source[obj];
        }
        return target;
    }

    window.SR = new ScrollReveal( {scale:1, reset:true} );

    // 商标服务
    var serviceList = document.querySelector('ul.service-list');
    if(serviceList){
        var serviceListLi = serviceList.querySelectorAll('li');
        var serviceListConfig = { origin:'right', duration: 600, distance:'300px', viewFactor:1 };
        SR.reveal( serviceListLi, extend( serviceListConfig ), 100 );
    }

    //资质荣誉
    var themeConfig = { origin:'right', distance:'300px', viewFactor:1 };
    var honorList = document.querySelectorAll('ul.honor-list > li');
    if(honorList){
        for(var i=0; i<honorList.length; i++){
            SR.reveal( honorList[i], extend(themeConfig, { duration : i*200+200 }));
        }
    }
    // 齐翔优势, 一目了然
    var advantageConfig = { distance:'200px', duration: 400, viewFactor:1 };
    var advantage = document.querySelector('ul.advantage-list');
    if(advantage){
        var advantageDiv = advantage.querySelectorAll('div');
        var advantageH1 = advantage.querySelectorAll('h1');
        var advantageH3 = advantage.querySelectorAll('h3');
        for(var i=0; i<advantageDiv.length; i++){
            SR.reveal( advantageDiv[i], extend(themeConfig, { origin : 'top' }));
            SR.reveal( advantageH1[i], extend(themeConfig, { origin : 'bottom' }));
            SR.reveal( advantageH3[i], extend(themeConfig, { origin : 'bottom' }));
        }

    }
    // 贴心售后，为您解忧
    var afterService = document.querySelector('ul.after-service-list');
    var afterServiceConfig = { origin:'bottom', distance:'200px', duration: 1000, viewFactor:0.8 };
    if(afterService){
        var aside = afterService.querySelectorAll('aside');
        for(var i=0; i<aside.length; i++){
            SR.reveal( aside[i], afterServiceConfig);
        }
    }

    // 更多免费服务
    var moreService = document.querySelector('ul.more-service-list');
    var moreServiceConfig = { origin:'right', distance:'350px', viewFactor:1 };
    if(moreService){
        var li = moreService.querySelectorAll('li');
        for(var i=0; i<li.length; i++){
            SR.reveal( li[i], extend(moreServiceConfig, { duration: i*200+200 }));
        }
    }

    // 齐翔商标五星优势
    var advantageList = document.querySelector('ul.T-advantage-list');
    var advantageListConfig = { duration: 800, distance:'150px', viewFactor:1 };
    if(advantageList){
        var img = advantageList.querySelectorAll('img');
        var h2 = advantageList.querySelectorAll('h2');
        var h3 = advantageList.querySelectorAll('h3');
        for(var i=0; i<img.length; i++){
            SR.reveal( img[i], extend(advantageListConfig, { origin: 'top' }));
            SR.reveal( h2[i], extend(advantageListConfig, { origin: 'bottom' }));
            SR.reveal( h3[i], extend(advantageListConfig, { origin: 'bottom' }));
        }
    }
    // 大品牌的选择，值得信赖
    var brandList = document.querySelector('ul.T-brand-list');
    if(brandList){
        var brandListLi = brandList.querySelectorAll('li');
        var brandListLiConfig = { origin: 'right', duration: 600, distance:'550px', viewFactor:0.5, scale: 1 };
        SR.reveal( brandListLi, brandListLiConfig, 100 );
    }

    // 流程及周期
    var cycle = document.querySelector('ul.cycle-list');
    var cycleConfig = { origin: 'bottom', duration: 800, distance:'0px', viewFactor:1, scale: 0.3 };
    if(cycle){
        var cycleLi = cycle.querySelectorAll('li');
        SR.reveal( cycleLi, cycleConfig, 100 );
    }

    // 用齐翔的专业为您的品牌保驾护航
    var protect = document.querySelector('ul.protect-list');
    var protectConfig = { duration: 800, distance:'150px', viewFactor:1 };
    if(protect){
        var protectDiv = protect.querySelectorAll('li > div');
        var protectH2 = protect.querySelectorAll('h2');
        var protectH3 = protect.querySelectorAll('h3');
        SR.reveal( protectDiv, extend(protectConfig, { origin: 'top' }));
        SR.reveal( protectH2, extend(protectConfig, { origin: 'bottom' }));
        SR.reveal( protectH3, extend(protectConfig, { origin: 'bottom' }));
    }

    // 商标续展办理流程
    var handle = document.querySelector('ul.handle-list');
    var handleConfig = { origin: 'right', duration: 800, distance:'400px', viewFactor:1, scale: 1 };
    if(handle){
        var handleLi = handle.querySelectorAll('li');
        SR.reveal( handleLi, handleConfig, 400 );
    }

    // 用我们的专业为您的知识产权保驾护航
    var E_advantage = document.querySelector('ul.E-advantage-list');
    if(E_advantage){
        var E_advantageImg = E_advantage.querySelectorAll('img');
        var E_advantageH2 = E_advantage.querySelectorAll('h2');
        var E_advantageH3 = E_advantage.querySelectorAll('h3');
        var E_advantageConfig = { duration: 1000, distance:'100px', viewFactor:1, scale: 1 };
        SR.reveal( E_advantageImg, extend(E_advantageConfig, {origin: 'top'}) );
        SR.reveal( E_advantageH2, extend(E_advantageConfig, {origin: 'bottom'}) );
        SR.reveal( E_advantageH3, extend(E_advantageConfig, {origin: 'bottom'}) );
    }

    // 大品牌的选择，值得信赖
    var trust = document.querySelector('ul.trust-list');
    if(trust){
        var trustLI = trust.querySelectorAll('li');
        var trustConfig = { origin: 'top', duration: 800, distance:'300px', viewFactor:1, scale: 1 };
        SR.reveal( trustLI, trustConfig, 100 );
    }

    // 贴心服务，为您解忧
    var intimate = document.querySelector('ul.intimate-list');
    if(intimate){
        var intimateSpan = intimate.querySelectorAll('span');
        var intimateConfig = { origin: 'top', duration: 2000, distance:'0px', viewFactor:1, scale: 0.1 };
        SR.reveal( intimateSpan, intimateConfig );
    }

    // 更多免费服务
    var patentService = document.querySelector('ul.patent-service-list');
    if(patentService){
        var patentServiceLi = patentService.querySelectorAll('li');
        var patentServiceConfig = { origin: 'right', duration: 800, distance:'400px', viewFactor:1, scale: 1 };
        SR.reveal( patentServiceLi, patentServiceConfig, 100 );
    }

    // 专家团队
    var expert = document.querySelector('ul.expert-list');
    if(expert){
        var expertLi = expert.querySelectorAll('li');
        var expertConfig = { origin: 'right', duration: 800, distance:'400px', viewFactor:1, scale: 1 };
        SR.reveal( expertLi, expertConfig, 100 );
    }

    // 办理流程及资料
    var processPatent = document.querySelector('ul.process-patent-list');
    if(processPatent){
        var processPatentLi = processPatent.querySelectorAll('li');
        var processPatentConfig = { origin: 'bottom', duration: 400, distance:'200px', viewFactor:0.5, scale: 1 };
        SR.reveal( processPatentLi, processPatentConfig, 50 );
    }

    // 大品牌的选择，值得信赖
    var N_brand = document.querySelector('ul.N-brand-list');
    if(N_brand){
        var N_brandLi = N_brand.querySelectorAll('li');
        var N_brandConfig = { origin: 'bottom', duration: 600, distance:'0px', viewFactor:1, scale: 0.5 };
        SR.reveal( N_brandLi, N_brandConfig );
    }

    // 成功案例
    var success = document.querySelector('ul.success-case-list');
    if(success){
        var successConfig = { origin: 'bottom', duration: 1000, distance:'0px', viewFactor:1, scale: 0.2 };
        SR.reveal( success, successConfig );
    }

    // 用齐翔的专业为您的品牌保驾护航
    var w_protect = document.querySelector('ul.W-protect-list');
    if(w_protect){
        var w_protectDiv = w_protect.querySelectorAll('div');
        var w_protectConfig = { origin: 'top', duration: 2000, distance:'200px', viewFactor:1, scale: 0.2 };
        SR.reveal( w_protectDiv, w_protectConfig );
    }

    // 登记版权的好处
    var rBenefit = document.querySelector('ul.register-benefit-list');
    if(rBenefit){
        var rBenefitLi = rBenefit.querySelectorAll('li');
        var rBenefitConfig = { origin: 'right', duration: 800, distance:'300px', viewFactor:1, scale: 0.8 };
        SR.reveal( rBenefitLi, rBenefitConfig, 100 );
    }

    // 软著版权登记流程及资料
    var wProcess = document.querySelector('ul.W-process-list');
    if(wProcess){
        var wProcessLi = wProcess.querySelectorAll('li');
        var wProcessConfig = { origin: 'right', duration: 400, distance:'200px', viewFactor:1, scale: 1 };
        SR.reveal( wProcessLi, wProcessConfig, 200 );
    }
})();
/**
 * @file 禁止pc浏览器使用ctrl/cammond + +/- 或 Windows下ctrl + 滚轮 缩放页面 (prevent borwser zoom)
 */
document.addEventListener('DOMContentLoaded', function (event) {
    // chrome 浏览器直接加上下面这个样式就行了，但是ff不识别
    document.body.style.zoom = 'reset';
    document.addEventListener('keydown', function (event) {
        if ((event.ctrlKey === true || event.metaKey === true)
        && (event.which === 61 || event.which === 107
            || event.which === 173 || event.which === 109
            || event.which === 187  || event.which === 189))
            {
               event.preventDefault();
            }
    }, false);
    document.addEventListener('mousewheel', function (event) {
        // console.info(0);
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, false);
    document.addEventListener('DOMMouseScroll', function (event) {
        // console.info(1);
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, false);
}, false);
