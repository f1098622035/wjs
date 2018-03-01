$(function(){
    /*轮播图*/
    banner();
    /*移动端页签滑动*/
    tapSwipe();
    /*初始化工具提示*/
    initTip();
});

/*轮播图*/
var banner = function(){
    /*
    * 1.分析需要的数据 并且模拟
    * 2.在页面初始化的时候判断当前设备
    * 3.根据设备来渲染页面
    * 3.1 把数据解析成html格式的字符串 （字符串拼接  template模版引擎）
    * 3.2 字符串设置到页面中
    * 4.测试在不同终端显示情况  通过切换窗口宽度
    * 5.在移动端可滑动切换
    * */

    /*1.分析需要的数据 并且模拟*/
    var data = [
        {
            pcUrl:'images/slide_01_2000x410.jpg',
            mUrl:'images/slide_01_640x340.jpg'
        },
        {
            pcUrl:'images/slide_02_2000x410.jpg',
            mUrl:'images/slide_02_640x340.jpg'
        },
        {
            pcUrl:'images/slide_03_2000x410.jpg',
            mUrl:'images/slide_03_640x340.jpg'
        },
        {
            pcUrl:'images/slide_04_2000x410.jpg',
            mUrl:'images/slide_04_640x340.jpg'
        },
        {
            pcUrl:'images/slide_04_2000x410.jpg',
            mUrl:'images/slide_04_640x340.jpg'
        },
        {
            pcUrl:'images/slide_04_2000x410.jpg',
            mUrl:'images/slide_04_640x340.jpg'
        }
    ];

    /*渲染*/
    var render = function(){
        /*2.在页面初始化的时候判断当前设备*/
        var width = $(window).width();
        var isMobile = width < 768 ? true : false;
        /*3.根据设备来渲染页面*/
        /*3.1 把数据解析成html格式的字符串 （字符串拼接  template模版引擎）*/
        /*1.准备数据*/
        /*2.准备模版*/
        /*3.转化成一个模版函数*/
        var templatePointFuc = _.template($('#pointTpl').html());
        var templateImageFuc = _.template($('#imageTpl').html());
        /*4.解析数据*/
        var htmlPoint = templatePointFuc({list:data});
        var htmlImage = templateImageFuc({model:data,isM:isMobile});
        /*3.2 字符串设置到页面中*/
        $('.carousel-indicators').html(htmlPoint);
        $('.carousel-inner').html(htmlImage);

    }

    /*4.测试在不同终端显示情况  通过切换窗口宽度*/
    $(window).on('resize',function(){
        render();
    }).trigger('resize');

    /*5.在移动端可滑动切换*/
    /*手势切换  滑动距离超过50px认为是一个手势 左滑  右滑*/

    var startX = 0;
    var moveX = 0;
    var distanceX = 0 ;
    var isMove = false;
    /*originalEvent 才是 touch事件对象*/
    $('.wjs_banner').on('touchstart',function(e){
        startX = e.originalEvent.touches[0].clientX;
    }).on('touchmove',function(e){
        moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX - startX;
        isMove = true;
    }).on('touchend',function(e){
        /*在手指离开的时候才算是完整的手势*/
        /*判断怎么符合手势的要求  距离大于50px*/
        if(isMove && Math.abs(distanceX) > 50){
            /*满足了*/
            if(distanceX < 0 ){
                /*左滑 下一张*/
                $('.carousel').carousel('next');
            }else{
                /*右滑 上一张*/
                $('.carousel').carousel('prev');
            }
        }

        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;

    });

}
/*移动端页签滑动*/
var tapSwipe = function(){
    /*
    * 1.需要要滑动组件的html结构  父容器包裹单个子容器
    * 2.父容器的宽度  需要定死   子容器的宽度动态的计算 能包裹所有的页签一行显示
    * 3.利用插件完成滑动效果   iscroll
    * */

    /*获取需要操作的元素*/
    var parentBox = $('.nav-tabs-parent');
    var childBox = parentBox.children();
    var allTabs = childBox.find('li');

    var width = 0;
    /*计算出所有li宽度的和*/
    allTabs.each(function(){
        /*
        * 1. 获取内容的宽度   width();
        * 2. 获取内容+内边距  innerWidth();
        * 3. 获取内容+内边距+边框  outerWidth();
        * 4. 获取内容+内边距+边框+外边距 outerWidth(true);
        * */
        width += $(this).outerWidth(true);
    });

    childBox.width(width);

    /*3.利用插件完成滑动效果   iscroll*/
    new IScroll('.nav-tabs-parent',{
        scrollY:false,
        scrollX:true
    });
};

/*初始化工具提示  手动初始化*/
var initTip = function(){
    /*初始化绿色的*/
    $('[data-toggle="tooltip"]').tooltip();
}