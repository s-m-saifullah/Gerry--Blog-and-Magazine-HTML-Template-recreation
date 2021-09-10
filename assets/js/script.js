$(function(){

    // Document Height
    var height = document.body.scrollHeight;

    $(window).on ('scroll', function(){
        
        var distLeft = $('.sidebar').offset().left;

        // SIDEBAR STICKY ON SCROLL DOWN
        var scrollTop = $(window).scrollTop();

        // SCROLL NAV APPEARANCE
        if (window.innerWidth >= 992) {
            if (scrollTop > 200) {
                $('.scroll_menu').css('top','0')
            } else {
                $('.scroll_menu').css('top','-120px')
            }
        }
       

        if (scrollTop > 3417 && scrollTop < 4020) {
            $('.sidebar').addClass('sticky_sidebar');
            $('.sticky_sidebar').css('left', distLeft);
        } else {
            $('.sidebar').removeClass('sticky_sidebar');
        }

        if (scrollTop > 4020){
             $('.sidebar').addClass('sticky_sidebar_fix');
             $('.sticky_sidebar').css('left', distLeft);
        } else {
            $('.sidebar').removeClass('sticky_sidebar_fix');
        }

        if (window.innerWidth <= 1199) {

            if (scrollTop > 3300 && scrollTop < 3630) {
                $('.sidebar').addClass('sticky_sidebar');
                $('.sticky_sidebar').css('left', distLeft);
            } else {
                $('.sidebar').removeClass('sticky_sidebar');
            }

            if (scrollTop > 3630){
                $('.sidebar').addClass('sticky_sidebar_fix');
                $('.sticky_sidebar').css('left', distLeft);
           } else {
               $('.sidebar').removeClass('sticky_sidebar_fix');
           }
        }

        if (window.innerWidth >= 1400) {

            if (scrollTop > 3332 && scrollTop < 3915) {
                $('.sidebar').addClass('sticky_sidebar');
                $('.sticky_sidebar').css('left', distLeft);
            } else {
                $('.sidebar').removeClass('sticky_sidebar');
            }

            if (scrollTop > 3915){
                $('.sidebar').addClass('sticky_sidebar_fix');
                $('.sticky_sidebar').css('left', distLeft);
           } else {
               $('.sidebar').removeClass('sticky_sidebar_fix');
           }
        }

        // BACT TO TOP BUTTON APPEARANCE

        if (window.innerWidth >= 768) {

            if (scrollTop >= .2 * height) {
                $('.b2t_btn').show(300);
            } else {
                $('.b2t_btn').hide(300);
            }
        }

    })



    // Header Search Button
    $('.header_search').on('click', function(){
        $('.header_search--overlay').fadeIn(200);
    })

    $('.header_search').on('click', function(){
        $('.search-close').fadeIn(1000);
    })

    // Header Search Close

    $('.search-close').on('click', function(){
        $('.header_search--overlay').fadeOut(500);
        return false;
    })

    // Animate Header Search Overlay Form

    $('.header_search').on('click', function(){
        $('.header_search--overlay form').css('animation', 'centerOut .5s forwards .5s')
    })

    $('.search-close').on('click', function(){
        $('.header_search--overlay form').css('animation', 'toCenter .5s forwards')
    })

    // Sidebar slider

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },

      });

    //   BACT TO TOP

    $('.b2t_btn').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 1000)
    })

    
      
})