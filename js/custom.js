$(function(){

// typejs
var typed = new Typed('.element', {
    strings: ['web Designer','Front-end Developer'],
     typeSpeed:200,
     backSpeed:50,
     loop:true
  });


 
//   testimonial js 

  $('.testi-slick').slick({
    
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:".next",
    prevArrow:".prev",
    dots:true
  });


  // colorful js 

  $(document).ready(function(){
          
    $("#colorful").colorfulTab();    
    
    $("#colorful-elliptic").colorfulTab({
        theme: "elliptic"
    }); 
   
   $("#colorful-flatline").colorfulTab({
        theme: "flatline"
    });    
    
    $("#colorful-background-image").colorfulTab({
        theme: "flatline",
        backgroundImage: "true",
        overlayColor: "#002F68",
        overlayOpacity: "0.8"
    });   

});




// counter js 

$('.counter').counterUp({
    delay: 100,
    time: 5000
});



// common js 


$(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 30){
        $(".back-to-top i").fadeIn( 500)
    }else{
        $(".back-to-top i").fadeOut( 500)
    }


    if(scrolling > 50){
        $(".menu-bg").addClass("nav-bg")
    }else{
        $(".menu-bg").removeClass("nav-bg")
    }
})

$(".back-to-top i").click(function(){
    $('html,body').animate({
        scrollTop:0
    })
    
})






// wow js 
new WOW().init();






 new kursor({
    type: 1,
    removeDefaultCursor: true,
    color:"#ECF0F1"
  })


})




