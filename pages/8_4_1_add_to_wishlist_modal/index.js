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

  $('.wishmodal__dropdown-select').select2({
    width: '100%',
    placeholder: 'Select wishlist',
    dropdownCssClass: 'dropdown__container dropdown__container_modal',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });

  $('#cancel-btn').click(function(e) {
    e.preventDefault();
    window.location.href = '../3_1_book_detail/index.html';
  });

  $('#add-btn').click(function(e) {
    e.preventDefault();
    $('#add-to-list-error').html('');
    
    const selectedWishlist = $('#wishlist-select').val();
    if (!selectedWishlist) {
      $('#add-to-list-error').html('Please select your collection');
      return;
    }

    window.location.href = '../3_1_book_detail/index.html';
  });
});
