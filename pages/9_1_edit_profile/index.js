$(document).ready(function() {
  $('.profile__dropdown-select').select2({
    width: '100%',
    dropdownCssClass: 'dropdown__container dropdown__container_large',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });

  $('.profile__salutation-select').select2({
    width: 140,
    dropdownCssClass: 'dropdown__container',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });
});
