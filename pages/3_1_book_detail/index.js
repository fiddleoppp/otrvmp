$(document).ready(function() {
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

  tippy('.ctabox__description-info', {
    content: 'Price incl. GST. Local courier delivery with tracking number.',
    trigger: 'mouseenter',
    theme: 'custom',
    arrow: false,
    placement: 'bottom-start',
    maxWidth: 440,
    offset: [-60, 8]
  });

  $('#add-to-list-btn').click(function() {
    window.location.href = '../8_4_1_add_to_wishlist_modal/index.html';
  });
});
