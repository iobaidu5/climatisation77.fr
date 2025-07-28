$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});




// const nav = document.querySelector(".fixedNav");
// window.addEventListener("scroll", fixNav);

// function fixNav() {
//   if (window.scrollY > nav?.offsetHeight + 150) {
//     nav.classList.add("navbar-active");
//    nav.removeAttribute('clip-path');
//   } else {
//     nav.classList.remove("navbar-active");
//   }
// }



	
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 768px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-136073697-1');

$(document).ready(function(){
  // Initialize slider with responsive settings
  var slider = $('.bxslider').bxSlider({
      auto: true,
      speed: 800,
      pause: 5000,
      pager: true,
      controls: true,
      adaptiveHeight: true,
      responsive: true,
      touchEnabled: true,
      infiniteLoop: true,
      hideControlOnEnd: false,
      minSlides: 1,
      maxSlides: 3,
      moveSlides: 1,
      slideWidth: 360,
      slideMargin: 20,
      autoHover: true,
      autoControls: false,
      useCSS: false,
      onSliderLoad: function() {
          // Update controls after load
          $('.bx-controls-direction a').removeClass('disabled');
      },
      onSlideAfter: function() {
          // Update controls after slide
          $('.bx-controls-direction a').removeClass('disabled');
      }
  });
  
  // Handle window resize for better responsiveness
  $(window).on('resize', function() {
      slider.reloadSlider();
  });
});

$(window).scroll(function(){
                  
  if($(document).scrollTop()>135){
      $(".menu").animate({
     },1000);
   $(".menu").addClass('fixmenu');
  }
    else{
     $(".menu").animate({
     },1000);
     $(".menu").removeClass('fixmenu');
    }
  });




  $(document).ready(function() {
    var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});

$(window).scroll(function(){
  if($(document).scrollTop()>135){
  $("#fixphone").slideDown(300);
  }
  else{
  $("#fixphone").slideUp(300);
  }
  });


  console.log($);            
console.log($.fn.fadeIn);

  $(document).ready(function(){
    $("#etape1").click(function(){
        $(this).addClass("active");
        $("#etape2").removeClass("active");
        $("#etape3").removeClass("active");
        $("#etape4").removeClass("active");
        $("#bloc1").fadeIn(200);
        $("#bloc2").fadeOut(200);
        $("#bloc3").fadeOut(200);
        $("#bloc4").fadeOut(200);
    });


     $("#etape2").click(function(){
        $(this).addClass("active");
        $("#etape1").removeClass("active");
        $("#etape3").removeClass("active");
        $("#etape4").removeClass("active");
        $("#bloc2").fadeIn(200);
        $("#bloc1").fadeOut(200);
        $("#bloc3").fadeOut(200);
        $("#bloc4").fadeOut(200);
    });


     $("#etape3").click(function(){
        $(this).addClass("active");
        $("#etape1").removeClass("active");
        $("#etape2").removeClass("active");
        $("#etape4").removeClass("active");
        $("#bloc3").fadeIn(200);
        $("#bloc1").fadeOut(200);
        $("#bloc2").fadeOut(200);
        $("#bloc4").fadeOut(200);
    });

     $("#etape4").click(function(){
        $(this).addClass("active");
        $("#etape1").removeClass("active");
        $("#etape3").removeClass("active");
        $("#etape2").removeClass("active");
        $("#bloc4").fadeIn(200);
        $("#bloc1").fadeOut(200);
        $("#bloc3").fadeOut(200);
        $("#bloc2").fadeOut(200);
    });


});

$('.bootstrap-datepicker input').datepicker({
  todayBtn: "linked",
  language: "fr",
  autoclose: true,
  todayHighlight: true
});

$('.clockpicker').clockpicker({
  autoclose: true
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("menu");
var sticky = header.offsetTop;
var placeholderHeight = document.getElementById("menu").clientHeight;
var placeholder = document.getElementById("placeHolder");

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixmenu");
    placeholder.style.height = placeholderHeight + 'px';

  } else {
    header.classList.remove("fixmenu");
    placeholder.style.height = 'auto';
  }
}