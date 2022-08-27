$(document).ready(function() {
  $.toast({
    hideAfter: false,
    text: 'Book successfully added to your wishlist',
    position: 'bottom-center',
    textColor: 'var(--color-ot-white)',
    bgColor: 'var(--color-ot-gray-80)'
  });

  $('.detail__personalization .bookslider__list').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="bookslider__arrow bookslider__arrow_prev"></button>',
    nextArrow: '<button class="bookslider__arrow bookslider__arrow_next"></button>',
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
