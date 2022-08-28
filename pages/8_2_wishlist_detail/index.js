$(document).ready(function() {
  $('.wishdetail__config-current').click(function() {
    $('.wishdetail__config-item').removeClass('wishdetail__config-item_open');
    $(this).closest('.wishdetail__config-item').addClass('wishdetail__config-item_open');
  });

  $('.wishdetail__config-dropdown .menu__item').click(function() {
    // Do something with the value
    console.log($(this).attr('data-label'), $(this).attr('data-value'));
  });

  $(document).mouseup(function(e) {
    var container = $('.wishdetail__config-item_open .wishdetail__config-dropdown');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.wishdetail__config-item_open').removeClass('wishdetail__config-item_open');
    }
  });
});