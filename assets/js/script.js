$(function(){

    // Document Height
    var docHeight = document.body.scrollHeight;
    // Sidebar Height
    var sidebarHeight = document.querySelector('.sidebar').clientHeight;

    var distTopSidebar = $('.sidebar').offset().top;

    totalSidebarHeight = sidebarHeight + distTopSidebar - window.innerHeight;
    
    // Sidebar Wrapper Height

    var hasSidebar = document.querySelector('.hasSidebar');

    var sidebarWrapperHeight = hasSidebar.clientHeight;

    var hasSidebarStyles = getComputedStyle(hasSidebar);

    var hasSidebarPaddingTop = parseInt(hasSidebarStyles.paddingTop.replace('px', ''));

    var hasSidebarPaddingBottom = parseInt(hasSidebarStyles.paddingBottom.replace('px', ''));

    var distTopSidebarWrapper = $('.hasSidebar').offset().top;

    var totalSidebarWrapperHeight = sidebarWrapperHeight + distTopSidebarWrapper - window.innerHeight;

    console.log (sidebarHeight);

    $(window).on ('scroll', function(){
        
        var distLeft = $('.sidebar').offset().left;
        

        // SIDEBAR STICKY ON SCROLL DOWN
        var scrollTop = $(window).scrollTop();

        // console.log(scrollTop, totalSidebarHeight, totalSidebarWrapperHeight);

        // SCROLL NAV APPEARANCE
        if (window.innerWidth >= 992) {
            if (scrollTop > 200) {
                $('.scroll_menu').css('top','0')
            } else {
                $('.scroll_menu').css('top','-120px')
            }
        }
       

        if (scrollTop > totalSidebarHeight && scrollTop <= totalSidebarWrapperHeight) {
            $('.sidebar').addClass('sticky_sidebar');
            $('.sticky_sidebar').css('left', distLeft);
        } else {
            $('.sidebar').removeClass('sticky_sidebar');
        }

        if (scrollTop > totalSidebarWrapperHeight){
             $('.sidebar').addClass('sticky_sidebar_fix');
             $('.sticky_sidebar').css('left', distLeft);
        } else {
            $('.sidebar').removeClass('sticky_sidebar_fix');
        }

        // if (window.innerWidth <= 1199) {

        //     if (scrollTop > 3470 && scrollTop <= 3800) {
        //         $('.sidebar').addClass('sticky_sidebar');
        //         $('.sticky_sidebar').css('left', distLeft);
        //     } else {
        //         $('.sidebar').removeClass('sticky_sidebar');
        //     }

        //     if (scrollTop > 3800){
        //         $('.sidebar').addClass('sticky_sidebar_fix');
        //         $('.sticky_sidebar').css('left', distLeft);
        //    } else {
        //        $('.sidebar').removeClass('sticky_sidebar_fix');
        //    }
        // }

        // if (window.innerWidth >= 1400) {

        //     if (scrollTop > 3332 && scrollTop <= 3915) {
        //         $('.sidebar').addClass('sticky_sidebar');
        //         $('.sticky_sidebar').css('left', distLeft);
        //     } else {
        //         $('.sidebar').removeClass('sticky_sidebar');
        //     }

        //     if (scrollTop > 3915){
        //         $('.sidebar').addClass('sticky_sidebar_fix');
        //         $('.sticky_sidebar').css('left', distLeft);
        //    } else {
        //        $('.sidebar').removeClass('sticky_sidebar_fix');
        //    }
        // }

        // BACT TO TOP BUTTON APPEARANCE

        if (window.innerWidth >= 768) {

            if (scrollTop >= .2 * docHeight) {
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