window.addEventListener('DOMContentLoaded',function(){
    var swiper = new Swiper('.swiper-container',{
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay:1000,
        autoplayDisableOnInteraction:false
    });
},false);

$(function(){
    new Scroll('#to-top');

    var aLi=$('.footer li');
    var aPage=$('.big-page');

    $.each(aLi,function(i){
        aLi.eq(i).on('click',function(){
            aPage.hide();
            aLi.removeClass('ac');
            aPage.eq($(this).index()).show();
            aLi.eq($(this).index()).addClass('ac');

        })
    });

    var bSys=true;
    $('.point').on('click',function (){
        if (bSys){
            $(this).css({'margin-left':'0.9rem'});
            $(this).parent().css('background','#ccc');
            $('.point').bind('transitionend',function(){
                bSys=false;
            },false);
        }else {
            $(this).css({'margin-left':'0.001rem','background':'#fcfcfc'});
            $(this).parent().css('background','#4cd864');
            $('.point').bind('transitionend',function(){
                bSys=true;
            },false);
        }
    });
});