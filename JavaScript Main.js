$(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value
    
    $("#logo").css("transform",'translate(0px,-'+scrollval/2+'%)');
    $("#btn").css("transform",'translate(-50%,'+scrollval/3+'%)');
});