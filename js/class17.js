$(function(){
    var mixer = mixitup('.mixitup_main ');
//mixit up part end//
$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling > 2000 ){
      $(".back_top i").fadeIn(700);

  }else{
     $(".back_top i").fadeOut(700);
  }
});

$(".back_top").click(function(){
  $('html, body').animate({
      scrollTop:0
  }, 1000)
});


  

  //test slick part start//  
    $('.test_slick').slick({
      Infinity:true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      dots:true,
    });


    //preloader//
    $(window).on("load", function(){
      $(".preloader").delay(200).fadeOut(200)
  });
  
})
