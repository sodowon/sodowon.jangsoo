$(function(){
  setInterval(function(){
    $("ul").stop().animate({marginLeft:"-100%"},1000,function(){
        $("ul").css({marginLeft:"0px"});
        $("li").first().appendTo("ul");
    });
  },3000)  
})