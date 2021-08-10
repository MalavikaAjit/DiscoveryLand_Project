const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
  // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  //for inner pages 
  $(document).ready(function(){
    $('.menubar').click(function(){
      $('.inner-pages').addClass('active');
    });
    $('.close-menu').click(function(){
      $('.inner-pages').removeClass('active');
    });
  });

  