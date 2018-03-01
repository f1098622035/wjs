$(function(){
/*************************************登陆注册页面切换*************************************************************/
				$(".y").click(function(){			
					$("#zuo").animate({"left":"0","opacity":"0"},400)
							 .animate({"left":"65%"});
					$("#you").animate({"left":"50%","margin-left":"-250px","opacity":"1"},500)
				})
				
				$(".e").click(function(){
					$("#you").animate({"left":"0","opacity":"0"},400)
							 .animate({"left":"75%"});
					$("#zuo").animate({"left":"50%","margin-left":"-250px","opacity":"1"},500)
				})
				
/************************************登陆注册按钮的变换*************************************************************/
				$(".form_zh_y").click(function(){$(".form_zh").css({"border-color":"#000"})})
				$(".form_zh_y").blur(function(){
					if($(".form_zh_y[type=text]").val()==""){
						$(".form_zh").css({"border-color":"red"})
					}else{
						$(".form_zh").css({"border-color":"#d9d9d9"})
					}
					})
				
				$(".form_zh_e").click(function(){$(".form_mm").css({"border-color":"#000"})})
				$(".form_zh_e").blur(function(){
					if($(".form_zh_e[type=password]").val()==""){
						$(".form_mm").css({"border-color":"red"})
					}else{
						$(".form_mm").css({"border-color":"#d9d9d9"})
					}
					})
				
/************************************ 就业班的按钮效果 *************************************************************/
				$(".mima_top img").hover(function(){
					$(this).stop().animate({"margin-top":"-5px"},200)
				},function(){
					$(this).stop().animate({"margin-top":"0"},200)
				})
				
/************************************ 课程库里面的图片移动上去放大 *************************************************************/

				$(".bos_two").hover(function(){
					$(this).find("img").stop().animate({"width":"310px","height":"200px","margin-left":"-10px","margin-top":"-10px"},400)
				},function(){
					$(this).find("img").stop().animate({"width":"290px","height":"180px","margin-left":"0","margin-top":"0"},100)
				})
				
				
				
			})


/*****手机号码判断****/
$(function(){
	$(".form_shouji").blur(function(){
		var yan = /^1[3|4|5|8|7][0-9]\d{8}$/;
		var intu = $(".form_shouji").val();

		if(!yan.test(intu)){
			$(".form_span2").html("");
			$(".form_span").html("手机号码错误");
		}else{
			$(".form_span").html(" ");
			$(".form_span2").html(" √");
		}
	})
})

/************************************ 登陆按钮移上去有颜色 *************************************************************/
















