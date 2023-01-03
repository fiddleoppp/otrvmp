$(document).ready(function() {
  // Selector for "Sort by", "Not-in stock items", "View per page"
  $('.wishdetail__config-popover').select2({
    width: 'auto',
    dropdownCssClass: 'popover__container',
    selectionCssClass: 'popover__selection',
    minimumResultsForSearch: -1
  });

  // onChange callback for "Sort by", "Not-in stock items", "View per page"
  $('.wishdetail__config-popover').on('select2:select', function(e) {
    console.log(e.params.data);
  })
});