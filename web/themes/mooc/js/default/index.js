define(function(require, exports, module) {
    require("jquery.nivo.slider");
    var Lazyload = require('echo.js');

    var Swiper = require('swiper');

    exports.run = function() {
    var swiper = new Swiper('.es-poster.swiper-container', {
            pagination: '.es-poster .swiper-pager',
            paginationClickable: true,
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            loop: true,
            calculateHeight: true,
            roundLengths: true,
            onInit: function(swiper) {
               $(".swiper-slide").removeClass('swiper-hidden'); 
            }
        });
        $('.es-poster .arrow-left').on('click', function(e){
            e.preventDefault()
            swiper.swipePrev()
           })
       $('.es-poster .arrow-right').on('click', function(e){
            e.preventDefault()
            swiper.swipeNext()
        })
      

        var swiper2 = new Swiper('.set-right.swiper-container', {
            autoplay: 6000,
            autoplayDisableOnInteraction: false,
            calculateHeight: true,
            roundLengths: true,
            slidesPerView: 4,
            onInit: function(swiper) {
               $(".swiper-slide").removeClass('swiper-hidden'); 
            }
        });
        $('.set-right .arrow-left').on('click', function(e){
            e.preventDefault()
            swiper2.swipePrev()
           })
       $('.set-right .arrow-right').on('click', function(e){
            e.preventDefault()
            swiper2.swipeNext()
        })


        var swiper3 = new Swiper('.class-list.swiper-container', {
            calculateHeight: true,
            roundLengths: true,
            slidesPerView: 4,
            onInit: function(swiper) {
               $(".swiper-slide").removeClass('swiper-hidden'); 
            }
        });
        $('.class-list .arrow-left').on('click', function(e){
            e.preventDefault()
            swiper3.swipePrev()
           })
       $('.class-list .arrow-right').on('click', function(e){
            e.preventDefault()
            swiper3.swipeNext()
        })
     
        var swiper4 = new Swiper('.teach-list.swiper-container', {
            pagination: '.teach-list .swiper-pager',
            paginationClickable: true,
            calculateHeight: true,
            roundLengths: true,
            slidesPerView: 4,
            onInit: function(swiper) {
               $(".swiper-slide").removeClass('swiper-hidden'); 
            }
        });
        Lazyload.init();
         var carousel = function() {
            var $this = $(".mooc-teacher .carousel-inner .item");
            for (var i = 0; i < $this.length; i++) {
              if (i == 0) {
                var html = '<li data-target=".carousel" data-slide-to="0" class="active"></li>';
                $this.parents(".teach-list").siblings(".carousel-indicators").append(html);
              }else {
                var html = '<li data-target=".carousel" data-slide-to="'+i+'"></li>';
                $this.parents(".teach-list").siblings(".carousel-indicators").append(html);
              }
            }
          }();
         $(window).scroll(function() {   
            var scroll = $(window).scrollTop();

            if($(".mooc-learn").length){
              var mottotop = $(".mooc-learn").position().top-$(window).height();
              if (scroll >= mottotop) {
                  $(".mooc-learn .img").addClass("animate");
              }else if($(".mooc-feature").length){
                var mottotop = $(".mooc-feature").position().top-$(window).height();
                if (scroll >= mottotop) {
                    $(".mooc-feature .row").addClass("animate");
                }
              }       
            }

          });

    };
});