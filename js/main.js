var hamburger = $('.hamburger-menu');
$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});


$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-active');
});


var swiper = new Swiper('.swiper', {
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 34,
  breakpoints: {
    768: {
      slidesPerView: 2.35,
      spaceBetween: 57,
      centeredSlides: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (n) {
      return '0' + n;
    },
    formatFractionTotal: function (n) {
      return '0' + n;
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



$(".accordion dt").on("click", function () {
  $(this).parent().toggleClass("open");
  $(this).next().slideToggle();
});





