(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

//PAGE Navigation

(function($) { "use strict";
        
    //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
        t.style.top = n.clientY + "px", 
        e.style.left = n.clientX + "px", 
        e.style.top = n.clientY + "px", 
        i.style.left = n.clientX + "px", 
        i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
    
    //Navigation

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };
        init();
    }();
    
    //About page
    
    $(".about-text").on('click', function () {
        $("body").addClass("about-on");
    });
    $(".about-close").on('click', function () {
        $("body").removeClass("about-on");
    });

    
    //Contact page
    
    $(".contact-text").on('click', function () {
        $("body").addClass("contact-on");
    });
    $(".contact-close").on('click', function () {
        $("body").removeClass("contact-on");
    });
    
})(jQuery);

// portfolio
 $('#recent_works ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('#recent_works ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.works_gallery, #recent_works ul').removeClass('item_open');
     return false;
 });

 $("#recent_works ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#window_top").offset().top)
     }, 400);
 });