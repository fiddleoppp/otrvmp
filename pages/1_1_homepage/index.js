$(document).ready(function() {
  $('.featured__list').slick({
    dots: true,
    arrows: false,
    dotsClass: 'featured__dots',
    autoplay: false,
    slidesToShow: 1,
    infinite: true,
    centerMode: true,
    centerPadding: 0,
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

  $('.bestseller .bookslider__list').slick({
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

  $('.header__search-dropdown-select').select2({
    width: 100,
    dropdownCssClass: 'dropdown__container header__search-dropdown-container',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });
});