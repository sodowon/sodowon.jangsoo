$(function(){
    let i = 0;
    $(".menu").on("click",function(){
        if (i == 0){
            $(".menu").css({zIndex:"9"});
            $(".gnb").stop().fadeIn().show();
            $('body').css("overflow", "hidden");
            i = 1;
        } else {
            $(".gnb").stop().fadeOut().hide();
            $('body').css("overflow", "scroll");
            $('body').css("overflowX", "hidden");
            i = 0;
        }
    });
});
