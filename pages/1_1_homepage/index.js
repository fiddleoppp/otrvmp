$(document).ready(function() {
  $('.featured__list').slick({
    dots: true,
    arrows: false,
    dotsClass: 'featured__dots',
    slidesToShow: 1,
    infinite: false,
    centerMode: true,
    centerPadding: '7%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: undefined
        }
      }
    ]
  });

  $('.bestseller__list').slick({
    dots: false,
    // dotsClass: 'bestseller__dots',
    arrows: true,
    prevArrow: '<button class="bestseller__arrow bestseller__arrow_prev"></button>',
    nextArrow: '<button class="bestseller__arrow bestseller__arrow_next"></button>',
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        }
      }
    ]
  });
});