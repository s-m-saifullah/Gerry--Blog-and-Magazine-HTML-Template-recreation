$(function(){
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
      
})