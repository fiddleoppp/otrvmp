$(document).ready(function() {
  $('.address__field_1').select2({
    width: '100%',
    placeholder: 'Singapore',
    dropdownCssClass: 'dropdown__container dropdown__container_large',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });

  $('.address__field_2').select2({
    width: '100%',
    placeholder: 'Singapore',
    dropdownCssClass: 'dropdown__container dropdown__container_large',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });
});
