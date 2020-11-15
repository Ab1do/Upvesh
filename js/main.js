let index = 0;
const totleWorkItem = $(".work-item").length;
var heightOfNavBar = $(".header").outerHeight();

// preLoader
$(window).on("load", function () {
    setTimeout(function () {
        $(".preloader").fadeOut("slow")
    })
    $("body").css("overflow", "auto");
})


$(document).ready(function () {

    // nav Toggle
    $(".nav-toggle").click(function () {   
        $(".header .nav").slideToggle();
    });

    $(".header .nav a").click(function (e) { 
        if($(window).width() < 768) {
            $(".header .nav").slideToggle();
        }
    });

    //fixed Header
    $(window).scroll(function () { 
        if($(this).scrollTop() > heightOfNavBar) {
            $(".header").addClass("fixed")
        } else {
            $(".header").removeClass("fixed")
        }
    });

    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


    // Set lightBox img max height  
    const wHeight = $(window).height();
    $(".lghtbox-img").css("max-height", wHeight + "px");


    // -------------Light box Start ---------------//
    //1-show the LightBox in the window
    $(".work-item-inner").click(function () {
        index = $(this).parent(".work-item").index()
        $(".lightbox").addClass("open");
        lightboxShow();
    })

    //2- prev lightbox Icon 
    $(".lightbox .prev").click(function () {
        if (index == 0) {
            index = totleWorkItem - 1;
        } else {
            index--;
        }
        lightboxShow();
    })
    //3- Next lightbox Icon 
    $(".lightbox .next").click(function () {
        if (index == (totleWorkItem - 1)) {
            index = 0;
        } else {
            index++;
        }
        lightboxShow();
    })
    //4- Close lightbox Icon 
    $(".lightbox .lightbox-close").click(function () {
        $(".lightbox").removeClass("open");
    });

    //4-- close lightbox when click outside of img-box
    $(".lightbox").click(function (event){
        if($(event.target).hasClass("lightbox")) {
            $(this).removeClass("open");
        }
    })
    // -------------Light box End ---------------//
});

function lightboxShow() {
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large")
    const category = $(".work-item").eq(index).find("h4").html();

    $(".lghtbox-img").attr("src", imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html(totleWorkItem + "/" + (index + 1));
}