$(function(){
	var num = 0;
	var banner = 0;
	var tu = $(".mm_bne_tu li");
	var biao = $(".mm_bne_biao li");
	
	// /******* 鼠标移动上去显示图标和图片 */	
	biao.click(function(){
		 $(this).addClass("li_yanse").siblings("li").removeClass("li_yanse");
		 num = biao.index($(this));
		 tu.eq(num).fadeIn().siblings("li").fadeOut();	
	})
	
	/******* 鼠标移动上去暂停 */		
	$("#banner_zanting").hover(function(){
		 clearTimeout(banner);//停止定时器
	},function(){
		zidongbf();			  //启动定时器
	})
	/******* 图片自动播放 */
	
	function zidongbf(){
		banner = setInterval(function(){	//用定时器，保存一个函数，让函数一秒换一张
			num++;
			if(num<3){
				biao.eq(num).addClass("li_yanse").siblings("li").removeClass("li_yanse");//根据下标，移动到哪个图标就变色
				tu.eq(num).fadeIn().siblings("li").fadeOut();							 //根据下标，当前图片显示，其余隐藏
			}else{
				num=0;
				biao.eq(num).addClass("li_yanse").siblings("li").removeClass("li_yanse");
				tu.eq(num).fadeIn().siblings("li").fadeOut();
			}
		},2000)
	}
	zidongbf();
	
	
	//右边点击按钮
	$(".l_button").click(function(){
		num--;
		if(num > -1 ){
			show();
		}else{
			num = 2;
			show();
		}
	})
	//右边点击按钮
	$(".r_button").click(function(){
		num++;
		if(num < 3){
			show()
		}else{
			num = 0;
			show()
		}
	})
	
	//显示相对应的按钮和图片
	function show(){
		biao.eq(num).addClass("li_yanse").siblings("li").removeClass("li_yanse");
		tu.eq(num).fadeIn().siblings("li").fadeOut();
	}

})

/*-----------------------------------------图片滚播图   ↑  --------------------------------------------------------------*/
/*-----------------------------------------移动图片时上升   ↓  --------------------------------------------------------------*/

$(function(){
	$(".dh_one").hover(function(){
		$(this).stop().animate({"margin-top":"-8px"},200)
	},function(){
		$(this).stop().animate({"margin-top":"0px"},200)
	})
})

$(function(){
	$(".kck_div_ul .kck_div_one").hover(function(){
		$(this).stop().animate({"margin-top":"6px"},200)
	},function(){
		$(this).stop().animate({"margin-top":"14px"},200)
	})
})

/*-----------------------------------------图片放大    ↓  --------------------------------------------------------------*/

$(function(){
	$(".shequ_ul_one_li").hover(function(){
		$(this).find("img").stop().animate({"width":"598px","height":"358px","margin-left":"-30px","margin-top":"-15px"},500)
	},function(){
		$(this).find("img").stop().animate({"width":"540px","height":"328px","margin-left":"0","margin-top":"0"},500)
	})
})


/*----------------------------------------- 中间的四个点击框   ↓  --------------------------------------------------------------*/
$(function(){
	var dian = 0;
	$(".kck_ul li").click(function(){
		dian = $(".kck_ul li").index($(this));
		$(this).addClass("kck_ul_li").siblings(".kck_ul li").removeClass("kck_ul_li");
		$(".kck_hou>div").eq(dian).fadeIn().siblings(".kck_hou>div").fadeOut();
	})
})

/*----------------------------------------- 滑动鼠标是让那个搜索框没有   ↓  --------------------------------------*/
$(function(){
	$(".suosuo").click(function(){
		$(".ss_kuang").animate({"opacity":"1"},100);//点击按钮出现
		$(".suosuo").find("img").css("left","-23px")
	})
	$(window).scroll(function(){					//滚动条事件
			var height = $(window).scrollTop();		//获得滚动条距离浏览器的高度
			if(height > 1){
				$(".ss_kuang").css("opacity","0");
				$(".suosuo").find("img").css("left","0")
			}
		})

})

/*----------------------------------------- 滑动鼠标是让那个搜索框没有   ↓  --------------------------------------*/


$(window).scroll(function(){						//滚动条事件
			var height = $(window).scrollTop();		//获得滚动条距离浏览器的高度
			if(height >1200){
				$("#zui_shangkuang").stop().animate({"top":"0"},400)
			}else{
				$("#zui_shangkuang").stop().animate({"top":"-60px"},100)
			}
			if(height >400){		//这是右下角的小图标隐藏
				$(".yxk_shangs").stop().animate({"opacity":"1"},400)
			}else{
				$(".yxk_shangs").stop().animate({"opacity":"0"},100)
			}
		})



$(function(){
				$(".yxk_shangx").hover(function(){
					$(this).find("img").animate({"opacity":"0"},100)
					$(this).find("a").animate({"top":"0"},200)
//					$(this).stop().animate({"margin-left":"0px"},500).css("background","#560c09");
				},function(){
					$(this).find("a").animate({"top":"-60"},500)
					$(this).find("img").animate({"opacity":"1"},800)
				})
				
				$(".yxk_shangs").click(function(){
					$("body").animate({scrollTop:0},1000);	//让滚动条回到顶端
				})
			})









