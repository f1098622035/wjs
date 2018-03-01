$(function(){
    /*�ֲ�ͼ*/
    banner();
    /*�ƶ���ҳǩ����*/
    tapSwipe();
    /*��ʼ��������ʾ*/
    initTip();
});

/*�ֲ�ͼ*/
var banner = function(){
    /*
    * 1.������Ҫ������ ����ģ��
    * 2.��ҳ���ʼ����ʱ���жϵ�ǰ�豸
    * 3.�����豸����Ⱦҳ��
    * 3.1 �����ݽ�����html��ʽ���ַ��� ���ַ���ƴ��  templateģ�����棩
    * 3.2 �ַ������õ�ҳ����
    * 4.�����ڲ�ͬ�ն���ʾ���  ͨ���л����ڿ��
    * 5.���ƶ��˿ɻ����л�
    * */

    /*1.������Ҫ������ ����ģ��*/
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

    /*��Ⱦ*/
    var render = function(){
        /*2.��ҳ���ʼ����ʱ���жϵ�ǰ�豸*/
        var width = $(window).width();
        var isMobile = width < 768 ? true : false;
        /*3.�����豸����Ⱦҳ��*/
        /*3.1 �����ݽ�����html��ʽ���ַ��� ���ַ���ƴ��  templateģ�����棩*/
        /*1.׼������*/
        /*2.׼��ģ��*/
        /*3.ת����һ��ģ�溯��*/
        var templatePointFuc = _.template($('#pointTpl').html());
        var templateImageFuc = _.template($('#imageTpl').html());
        /*4.��������*/
        var htmlPoint = templatePointFuc({list:data});
        var htmlImage = templateImageFuc({model:data,isM:isMobile});
        /*3.2 �ַ������õ�ҳ����*/
        $('.carousel-indicators').html(htmlPoint);
        $('.carousel-inner').html(htmlImage);

    }

    /*4.�����ڲ�ͬ�ն���ʾ���  ͨ���л����ڿ��*/
    $(window).on('resize',function(){
        render();
    }).trigger('resize');

    /*5.���ƶ��˿ɻ����л�*/
    /*�����л�  �������볬��50px��Ϊ��һ������ ��  �һ�*/

    var startX = 0;
    var moveX = 0;
    var distanceX = 0 ;
    var isMove = false;
    /*originalEvent ���� touch�¼�����*/
    $('.wjs_banner').on('touchstart',function(e){
        startX = e.originalEvent.touches[0].clientX;
    }).on('touchmove',function(e){
        moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX - startX;
        isMove = true;
    }).on('touchend',function(e){
        /*����ָ�뿪��ʱ�����������������*/
        /*�ж���ô�������Ƶ�Ҫ��  �������50px*/
        if(isMove && Math.abs(distanceX) > 50){
            /*������*/
            if(distanceX < 0 ){
                /*�� ��һ��*/
                $('.carousel').carousel('next');
            }else{
                /*�һ� ��һ��*/
                $('.carousel').carousel('prev');
            }
        }

        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;

    });

}
/*�ƶ���ҳǩ����*/
var tapSwipe = function(){
    /*
    * 1.��ҪҪ���������html�ṹ  ��������������������
    * 2.�������Ŀ��  ��Ҫ����   �������Ŀ�ȶ�̬�ļ��� �ܰ������е�ҳǩһ����ʾ
    * 3.���ò����ɻ���Ч��   iscroll
    * */

    /*��ȡ��Ҫ������Ԫ��*/
    var parentBox = $('.nav-tabs-parent');
    var childBox = parentBox.children();
    var allTabs = childBox.find('li');

    var width = 0;
    /*���������li��ȵĺ�*/
    allTabs.each(function(){
        /*
        * 1. ��ȡ���ݵĿ��   width();
        * 2. ��ȡ����+�ڱ߾�  innerWidth();
        * 3. ��ȡ����+�ڱ߾�+�߿�  outerWidth();
        * 4. ��ȡ����+�ڱ߾�+�߿�+��߾� outerWidth(true);
        * */
        width += $(this).outerWidth(true);
    });

    childBox.width(width);

    /*3.���ò����ɻ���Ч��   iscroll*/
    new IScroll('.nav-tabs-parent',{
        scrollY:false,
        scrollX:true
    });
};

/*��ʼ��������ʾ  �ֶ���ʼ��*/
var initTip = function(){
    /*��ʼ����ɫ��*/
    $('[data-toggle="tooltip"]').tooltip();
}