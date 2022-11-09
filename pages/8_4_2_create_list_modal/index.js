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

  $('#cancel-btn').click(function(e) {
    e.preventDefault();
    window.location.href = '../8_1_my_wishlist/index.html';
  });

  $('#create-btn').click(function(e) {
    e.preventDefault();
    $('#title-error').html('');
    
    const title = $('#title-input').val();
    const description = $('#description-input').val();

    if (!title) {
      $('#title-error').html("Please enter list's new title");
      return;
    }

    window.location.href = '../8_1_my_wishlist/index.html';
  });
});
