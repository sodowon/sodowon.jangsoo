$(function(){
setInterval(function(){
    $(".visual_box>li:first-child").first().stop().animate({opacity:1},1500,function(){
        $(".visual_box li").first().stop().animate({opacity:0},3000,function(){
            $(".visual_box li").first().appendTo(".visual_box")
        })
    });
},6000);
    $(".menu>a").on("click",function(){
        $(".gnb").stop.toggle();
    });
});

$(function(){
setInterval(function(){
    $(".con2 ul").stop().animate({marginLeft:"-100%"},function(){
        $(".con2 ul").css({marginLeft:"0px"});
    $(".con2 li").first().appendTo(".con2 ul");
    });
},3000);
});
