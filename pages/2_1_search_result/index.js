$(document).ready(function() {
  $('.header__search-dropdown-select').select2({
    width: 100,
    dropdownCssClass: 'dropdown__container header__search-dropdown-container',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });

  $('.srp__filter-item-value').click(function() {
    $('.srp__filter-item').removeClass('srp__filter-item_open');
    $(this).closest('.srp__filter-item').addClass('srp__filter-item_open');
  });

  $('.srp__filter-item-dropdown .menu__item').click(function() {
    console.log($(this).closest('.srp__filter-item-value'));
    // Do something with the value
  });

  $(document).mouseup(function(e) {
    var container = $('.srp__filter-item_open .srp__filter-item-dropdown');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.srp__filter-item_open').removeClass('srp__filter-item_open');
    }
  });
});