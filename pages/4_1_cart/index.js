$(document).ready(function() {
  $('#checkout-btn').click(function() {
    window.location.href = '../99_checkout/index.html';
  });

  $('#header-checkbox').change(function(e) {
    const checked = $(this).is(':checked');

    $('.cart__list-data .checkbox__input').prop('checked', checked);
  });

  $('#delete-selected-btn').click(function() {
    window.location.href = '../4_2_empty_cart/index.html';
  });

  $('#update-qty-btn').click(function() {
    window.alert('Quantity updated!');
  });

  $('#empty-cart-btn').click(function() {
    window.location.href = '../4_2_empty_cart/index.html';
  });

  // Set "checked" state of checkbox to reflect current state
  $('.checkbox').click(function(e) {
    e.stopPropagation();
    e.preventDefault();

    const checkbox = $(this).find('.checkbox__input');
    const nextTarget = !checkbox.attr('checked');

    const isHeadCheckbox = checkbox.attr('id') === 'header-checkbox';
    if (isHeadCheckbox) {
      $('.checkbox .checkbox__input').attr('checked', nextTarget);
      return;
    }

    
    checkbox.attr('checked', nextTarget);
  });
});