
$(window).scroll(function(){
    let aboutOffset=$('#ABOUT').offset().top;
    let scrollTop=$(window).scrollTop();
    if (scrollTop>aboutOffset-10) {
        $('#nav-item').css('background-color', 'rgba(0, 0, 0, 1)')
    }else{
        $('#nav-item').css('background-color', 'transparent')

    }

})
$('a').click(function(e){
   let href=$(this).attr('href');
   let offset=$(href).offset().top
   $('html,body').animate({ scrollTop: offset }, 1000)

})