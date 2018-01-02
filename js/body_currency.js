
//去左右空格;
function trim(s){
    return s.replace(/(^\s*)|(\s*$)/g, "");
}
// 表单判断
function formSubmit(elem){
    var input = elem.querySelectorAll('input');
    for( var i=0; i<input.length; i++){
        if(input[i].type === 'text'){
            var value = trim(input[i].value);
            if(value == ""){
                alert("请输入您的名字");
                return false;
            }
            if(value.length > 10){
                alert("您的名字太长了");
                return false;
            }
        };
        if(input[i].type === 'tel' || input[i].type === 'number'){
            var number = trim(input[i].value);
            if(number == ""){
                alert("请输入您的手机号码");
                return false;
            }
            if(number.length !== 11){
                alert("您输入的手机号码有误");
                return false;
            }
        };
    }
}
// 表单提交
(function(){
    var addressCon = document.querySelector('div.address-con');
    if(addressCon){
        var button = addressCon.querySelector('button');
        button.addEventListener('click',function(){
            formSubmit(addressCon);
        });
    }
})();

// 侧边栏
(function(){
    // 首页侧边栏
    var indexSidebar = document.querySelector('ul.index-sidebar-list');
    if(indexSidebar){
        var scrollHeight = indexSidebar.offsetHeight;
        window.onresize = function(){
            var rootHeight = window.innerHeight;
            // console.info(scrollHeight,rootHeight);
            indexSidebar.style.top = (rootHeight - scrollHeight) / 2 + "px";
        }
    }
})();


// 注册商标.html
(function(){
	// 保驾护航事件
	var expertList = document.querySelectorAll("ul.expert-list > li");
	// console.info(expertList);
	if(expertList){
		for(var i = 0; i < expertList.length; i++){
			expertList[i].addEventListener("mouseenter",function(){
				this.style.transform = 'scale(1.1,1.1)';
				this.style.transition = 'all 0.5s';
			});
			expertList[i].addEventListener("mouseleave",function(){
				this.style.transform = 'scale(1.0,1.0)';
			});
		}
	}
	// 注册流程事件
	var processRegion = document.querySelectorAll("ul.process-region > li");
	if(processRegion){
		for( var i = 0; i < processRegion.length; i++){
			processRegion[i].addEventListener("mouseenter",function(){
				for(var j = 0; j < processRegion.length; j++){
					processRegion[j].classList.remove("active");
				}
				this.classList.add("active");
			});
		}
	}
})();

// 商标续展.html
(function(){
	// 商标续展流程六步走
	var extensionH3 = document.querySelectorAll('section.extension > div > h3');
	var extensionList = document.querySelectorAll('ul.extension-list > li');
	if(extensionList){
		for(var i=0; i<extensionList.length; i++){
			extensionList[i].addEventListener('mouseenter',function(n){
				return function(){
					for(var j=0; j<extensionList.length; j++){
						extensionH3[j].style.display = "none";
					}
					extensionH3[n].style.display = "block";
				}
			}(i));
		}
    }
    
})();

// 首页.html
(function(){
	// 新闻中心
	var conList = document.querySelector("ul.news-con-list");
    if(conList){
        var conItem = conList.children;
        var improtant = new NewsScroll(conItem[0]);
        improtant.spotClick();
        improtant.imgScroll();
        improtant.switchType();
        var industry = new NewsScroll(conItem[1]);
        industry.spotClick();
        industry.imgScroll();
        // industry.switchType();
    }
    
	function NewsScroll(ele){
		var _this = this;
		this.index = 0; //序列号
		this.element = {  //所有元素
			spot : ele.querySelectorAll("div.news-details i"), //导航圆点
			detailsImg : ele.querySelector("ul.news-details-bak"), //新闻图片
			text : ele.querySelectorAll("div.news-details-text"), //新闻文本
			type : document.querySelectorAll("ul.news-type-list > li") //新闻类型
		},
		this.spotClick = function(){ //导航圆点点击方法
			// console.info(this.element.spot.length);
			for(var i = 0; i < this.element.spot.length; i++){
				this.element.spot[i].addEventListener("click",function(n){ //点击导航圆点
					return function(){
						// console.info(this);
						for(var j=0; j<this.element.spot.length; j++){
							this.element.spot[j].classList.remove("active"); //清除导航圆点
							this.element.text[j].style.display = "none"; //清除文本内容
						}
						this.element.detailsImg.style.left = "-" + n * 100 + "%"; //改变图片位置
						this.element.text[n].style.display = "block"; //改变文本内容
						this.element.spot[n].classList.add("active"); //为导航圆点添加样式
						clearTimeout(this.timer); //清除滚动定时
						clearTimeout(this.timer2); //清除重启滚动定时
						this.index = n; //把当前导航圆点位置 赋值 给序列号
						this.timer2 = setTimeout(this.imgScroll,10000); //重启滚动
					}.bind(this);
				}.bind(this)(i));
			}
		},
		this.imgScroll = function(){  //滚动方法
			// console.info(this);
			for(var j=0; j < _this.element.spot.length; j++){
				_this.element.spot[j].classList.remove("active"); //清除导航点
				_this.element.text[j].style.display = "none"; //隐藏所有新闻文本
			}
			_this.element.spot[_this.index].classList.add("active"); //给当前导航点添中焦点
			_this.element.detailsImg.style.left = "-" + _this.index * 100 + "%"; //新闻图片跟随滚动
			_this.element.text[_this.index].style.display = "block"; //显示当前新闻文本

			_this.index ++;
			if(_this.index >= _this.element.spot.length){
				_this.index = 0;  //归位
			}
			_this.timer = setTimeout(_this.imgScroll,5000); //设置滚动定时
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

// 国际商标注册.html
(function(){
    // 200个国家地区，总有一国适合你
    var conList = document.querySelectorAll("ul.continent-list > li");
    var conItem = document.querySelector("ul.continent-item");
    if(conList&&conItem){
        for(var i=0; i<conList.length; i++){
            conList[i].addEventListener("mouseenter", function(n){
                return function(){
                    // console.info(this);
                    for(var j=0; j<conList.length; j++){
                        conList[j].classList.remove("active");
                    }
                    this.classList.add("active");
                    conItem.style.left = - n * 100 + "%";
                }
            }(i));
        }
    }
})();

// 价格.html
(function(){
    var tenStrong = document.querySelector('section.ten-strong');
    if(tenStrong){
        var scroll = tenStrong.querySelector('div.ten-strong-scroll > ul');
        var li = tenStrong.querySelectorAll('div.ten-strong-scroll > ul > li');
        var btn = tenStrong.querySelectorAll('div.main > span');
        // console.info(btn);
        // console.info(li.length);
        var n = 0;
        btn[1].addEventListener('click', function(){
            if( n < li.length - 1 ){
                console.info(n);
                n++;
                scroll.style.left = "-" + n * 100 + "%";
            }
        });
        btn[0].addEventListener('click', function(){
            if( n > 0){
                console.info(n);
                n--;
                scroll.style.left = "-" + n * 100 + "%";
            }
        });
    }
})();

// 成功案例.html
(function(){
    var hotType = document.querySelectorAll('ul.hot-industry-type > li');
    var hotList = document.querySelector('ul.hot-list');
    for(var i=0; i<hotType.length; i++){
        hotType[i].addEventListener('click', function(n){
            return function(){
                for(var j=0; j<hotType.length; j++){
                    hotType[j].classList.remove('active');
                }
                this.classList.add('active');
                hotList.style.top = "-" + n * 100 + "%";
            }
        }(i));
    }
})();

// 关于和协.html
(function(){
    // 和协视界
    var view = document.querySelectorAll('ul.view-list > li');
    for(var i=0; i<view.length; i++){
        view[i].addEventListener('click', function(){
            for(var j=0; j<view.length; j++){
                view[j].classList.remove('active');
            }
            this.classList.add('active');
        })
    }

    // 员工风采
    var styleList = document.querySelectorAll('ul.staff-style-list > li');
    var arr0 = [0,1,2,3,4,5];
    var arr1 = [5,0,1,2,3,4];
    var arr2 = [4,5,0,1,2,3];
    var arr3 = [3,4,5,0,1,2];
    var arr4 = [2,3,4,5,0,1];
    var arr5 = [1,2,3,4,5,0];
    for(var i=0; i<styleList.length; i++){
        styleList[i].addEventListener('click',function(n){
            return function(){
                // console.info(n);
                for(var j=0; j<styleList.length; j++){
                    var arrName = eval("arr" + n);
                    styleList[j].className = "active_" + arrName[j];
                }
            }
        }(i));
        
        styleList[i].addEventListener('dragstart',function(event){
            event.preventDefault();
        });
    }
    // 常见问题答疑
    function scroll(target,elem){
        for(var i=0; i<target.length;i++){
            target[i].addEventListener('click',function(n){
                return function(){
                    for(var j=0; j<target.length; j++){
                        target[j].classList.remove('active');
                    }
                    this.classList.add('active');
                    elem.style.left = "-" + n * 100 + "%";
                }
            }.bind(this)(i))
        }
    }
    var type = document.querySelectorAll('ul.honor-type > li');
    var container = document.querySelector('ul.honor-container');
    if(type){
        scroll(type,container);
    };

    // 核心团队
    var team = document.querySelector('section.team');
    if(team){
        var teamEven = new teamScroll({
            spot : team.querySelectorAll("p.team-point > i"), //导航圆点
            detailsImg : team.querySelector("ul.team-list"), //新闻图片
            left : team.querySelectorAll("p.team-point > span")[0],
            right : team.querySelectorAll("p.team-point > span")[1]
        });
        teamEven.spotClick();
        teamEven.decline();
        teamEven.imgScroll();
    }
    function teamScroll(ele){
		var _this = this;
		this.index = 0; //序列号
        this.element = ele;
		this.spotClick = function(){ //导航圆点点击方法
            // console.info(this.element.spot.length);
			for(var i = 0; i < this.element.spot.length; i++){
				this.element.spot[i].addEventListener("click",function(n){ //点击导航圆点
					return function(){
						// console.info(this);
						for(var j=0; j<this.element.spot.length; j++){
							this.element.spot[j].classList.remove("active"); //清除导航圆点
						}
                        this.element.spot[n].classList.add("active"); //为导航圆点添加样式
                        this.element.detailsImg.style.left = "-" + n * 100 + "%"; //改变图片位置
						clearTimeout(this.timer); //清除滚动定时
						clearTimeout(this.timer2); //清除重启滚动定时
						this.index = n; //把当前导航圆点位置 赋值 给序列号
						this.timer2 = setTimeout(this.imgScroll,10000); //重启滚动
					}.bind(this);
				}.bind(this)(i));
			}
		},
		this.imgScroll = function(){  //滚动方法
			// console.info(this);
			for(var j=0; j < _this.element.spot.length; j++){
				_this.element.spot[j].classList.remove("active"); //清除导航点
			}
			_this.element.spot[_this.index].classList.add("active"); //给当前导航点添中焦点
			_this.element.detailsImg.style.left = "-" + _this.index * 100 + "%"; //新闻图片跟随滚动

			_this.index ++;
			if(_this.index >= _this.element.spot.length){
				_this.index = 0;  //归位
			}
			_this.timer = setTimeout(_this.imgScroll,6000); //设置滚动定时
        },
        this.refresh = function(){
            for(var j=0; j<this.element.spot.length; j++){
                this.element.spot[j].classList.remove("active"); //清除导航圆点
            }
            console.info(this.index);
            this.element.spot[this.index].classList.add("active"); //为导航圆点添加样式
            this.element.detailsImg.style.left = "-" + this.index * 100 + "%"; //改变图片位置
            clearTimeout(this.timer); //清除滚动定时
            clearTimeout(this.timer2); //清除重启滚动定时
            this.timer2 = setTimeout(this.imgScroll,5000); //重启滚动
        },
        this.decline = function(){ //递减切换方法
            this.element.left.addEventListener('click',function(){
                if(this.index == 0){
                    this.index = this.element.spot.length - 1;  //回到尾部
                }else{
                    this.index--; //把序列号递减
                }
                this.refresh();
            }.bind(this));
            this.element.right.addEventListener('click',function(){
                if(this.index == this.element.spot.length - 1){
                    this.index = 0;  //归位
                }else{
                    this.index++; //把序列号递增
                }
                this.refresh();
            }.bind(this))
        }
    };
    
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
    
    var themeConfig = { origin:'left', distance:'100px', viewFactor:1};
    window.SR = new ScrollReveal( {scale:1, reset:true} );

    //主题动画
    var theme = document.querySelector('section.theme');
    if(theme){
        var themeH1 = theme.querySelector('h1');
        var themeH4 = theme.querySelector('h4');
        var themeH3 = theme.querySelector('h3');
        var themeConfigH1 = { duration : 600 }
        var themeConfigH4 = { duration : 800 }
        var themeConfigH3 = { duration : 1000 }
        SR.reveal( themeH1, extend(themeConfigH1,themeConfig));
        SR.reveal( themeH4, extend(themeConfigH4,themeConfig));
        SR.reveal( themeH3, extend(themeConfigH3,themeConfig));
    }

    //商标事务
    var process = document.querySelectorAll('ul.process-list div');
    var processConfig = { origin:'top', distance:'200px' };
    if(process){
        for(var i=0; i<process.length; i++){
            SR.reveal( process[i], extend(processConfig, { duration : i*200 }));
        }
    }

    // 服务流程
    var affair = document.querySelectorAll('ul.affair-list > li');
    var affairConfig = { origin:'right', distance:'300px' };
    if(affair){
        for(var i=0; i<affair.length; i++){
            SR.reveal( affair[i], extend(affairConfig, { duration : i*200 }));
        }
    }

    // 和协对比其它品牌
    var contrast = document.querySelectorAll('ul.contrast-list > li');
    var contrastConfig = { origin:'bottom', viewFactor:1, distance:'300px', duration:800 };
    if(contrast){
        SR.reveal( contrast, contrastConfig, 200 );
    }

    // 快速答疑
    var doubt = document.querySelectorAll('ul.doubt-list > li');
    var doubtConfig = { origin:'right', distance:'400px' };
    if(doubt){
        for(var i=0; i<doubt.length; i++){
            SR.reveal( doubt[i], extend(doubtConfig, { duration : i*500 }));
        }
    }

    //为您保驾护航
    var expert = document.querySelectorAll('ul.expert-list > li');
    var expertConfig = { origin:'right', distance:'600px'};
    if(expert){
        for(var i=0; i<expert.length; i++){
            SR.reveal( expert[i], extend(expertConfig, { duration : i*300+300 }));
        }
    }

    // 管家式服务
    var service = document.querySelectorAll('ul.service-list div');
    var serviceConfig = { viewFactor:1, origin:'bottom', scale:0.6, distance:'200px', duration : 800 };
    if(service){
        for(var i=0; i<service.length; i++){
            SR.reveal( service[i], serviceConfig);
        }
    }

    // 立享五大免费服务
    var admission = document.querySelectorAll('ul.free-admission-list > li');
    var admissionConfig = { viewFactor:1, origin:'top', distance:'200px' };
    if(admission){
        for(var i=0; i<admission.length; i++){
            SR.reveal( admission[i], extend(admissionConfig, { duration : i*300+300 }));
        }
    }

    // 您只需提供资料, 剩下的全交给我们
    var better = document.querySelectorAll('ul.better-list > li');
    var betterConfig = { viewFactor:1, distance:'200px' };
    if(better){
        for(var i=0; i<better.length; i++){
            if(i%2 == 0){
                SR.reveal( better[i], extend(betterConfig, { origin:'left', duration : i*300+300 }));
            }else{
                SR.reveal( better[i], extend(betterConfig, { origin:'right', duration : i*300+300 }));
            }
        }
    }

    // 版权登记流程四步走
    var copyright = document.querySelectorAll('ul.copyright-process-list > li');
    if(copyright){
        var copyrightConfig = { origin:'right', viewFactor:1, distance:'200px',duration:1000, scale:0.6 };
        SR.reveal(copyright, copyrightConfig, 150);
    }

    // 这些可以登记计算机软件著作权
    var theseCan = document.querySelectorAll('ul.these-can-list');
    if(theseCan){
        var theseCanConfig = { origin:'left', viewFactor:0.2, distance:'200px',duration:1000, scale:0.3 };
        SR.reveal(theseCan, theseCanConfig);
    }

    // 商标不续展,重新注册九死一生
    var closeCallItem = document.querySelector('section.close-call ul.item');
    if(closeCallItem){
        var closeCallItemConfig = { origin:'bottom', viewFactor:0.5, distance:'200px',duration:1000, scale:0.3 };
        SR.reveal(closeCallItem, closeCallItemConfig);
    }

    // 高企认定服务流程八步走
    var cognizance = document.querySelectorAll('ul.cognizance-list > li');
    if(cognizance){
        var cognizanceConfig = { origin:'right', viewFactor:0.5, distance:'200px', duration:1000, scale:0.5 };
        SR.reveal(cognizance, cognizanceConfig, 200);
    }

    // 省制造强省专项项目服务流程八步走
    var powerfulCognizance = document.querySelectorAll('ul.powerful-cognizance-list > li');
    if(powerfulCognizance){
        var powerfulCognizanceConfig = { origin:'right', viewFactor:0.5, distance:'200px', duration:1000, scale:0.5 };
        SR.reveal(powerfulCognizance, powerfulCognizanceConfig, 200);
    }

    // 以下十大行业均可适合申报
    var industry = document.querySelectorAll('ul.industry-list > li');
    if(industry){
        var industryConfig = { origin:'right', viewFactor:1, distance:'0px', duration:1000, scale:0.1 };
        SR.reveal(industry, industryConfig, 200);
    }

    // 高新技术企业评定指标占比
    var proportion = document.querySelectorAll('ul.T-proportion-list > li');
    if(proportion){
        var proportionConfig = { origin:'bottom', viewFactor:1, distance:'300px', duration:700, scale:1 };
        SR.reveal(proportion, proportionConfig, 100);
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
    var scrollEven = isEventSupported('mousewheel') ? 'mousewheel' : 'DOMMouseScroll' ; //兼容火狐浏览器
    document.addEventListener( scrollEven, function (event) {
        // console.info(event.type);
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    }, false);
}, false);

// 检测浏览器是否支持某个事件
function isEventSupported( eventName, element ) {
    var element = element || document.documentElement ;
    var eventName = 'on' + eventName;
    var isSupported = eventName in element;
    if ( !isSupported ) {
        if ( !element.setAttribute ) {
            element = document.createElement('div');
        }
        element.setAttribute(eventName, '');
        isSupported = typeof element[eventName] === 'function';
        element.removeAttribute(eventName);
    }
    element = null;
    return isSupported;
}