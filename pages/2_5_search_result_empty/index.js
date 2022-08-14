$(document).ready(function() {
  $('.emptysearch__recommendation-list').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="emptysearch__recommendation-arrow emptysearch__recommendation-arrow_prev"></button>',
    nextArrow: '<button class="emptysearch__recommendation-arrow emptysearch__recommendation-arrow_next"></button>',
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