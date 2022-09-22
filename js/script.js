
$(function(){


  $('#play-video').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
  });
  
  $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
  });
  
  $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
  });
  
  function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };


  $(".img-slider").slick({
    arrows:false,
    // fade:true,
   asNavFor: ".details-slider",
   
   responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  })

  $(".details-slider").slick({
   arrows:false,
   dots:true,
  //  fade:true,
   asNavFor: ".img-slider",

   responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  })


  

    $(window).scroll(function(){
        console.log($(window).scrollTop())
    
        if($(window).scrollTop() >300){
    $(".menu").addClass("nav-scroll")
        }else{
            $(".menu").removeClass("nav-scroll") 
        }


        if($(window).scrollTop() >600){
          $(".top-button") .fadeIn()
              }else{
                $(".top-button") .fadeOut()
              }


    })
    
    $(".top-button").click(function(){
      $("html,body").animate({
        scrollTop:0
      },1000)
      })



})



