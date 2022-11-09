$(document).ready(function() {
  $('.profile__dropdown-select').select2({
    width: '100%',
    dropdownCssClass: 'dropdown__container dropdown__container_large',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });

  $('#add-new-address-btn').click(function() {
    window.location.href = '../10_2_address_form/index.html';
  });
});
