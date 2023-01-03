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

  $('#close-btn').click(function(e) {
    e.preventDefault();
    window.location.href = '../8_2_wishlist_detail/index.html';
  });

  $('#delete-btn').click(function(e) {
    e.preventDefault();
    window.location.href = '../8_3_no_wishlist/index.html';
  });

  $('#save-btn').click(function(e) {
    e.preventDefault();
    $('#title-error').html('');
    
    const title = $('#title-input').val();
    const description = $('#description-input').val();

    if (!title) {
      $('#title-error').html("Please enter list's new title");
      return;
    }

    window.location.href = '../8_2_wishlist_detail/index.html';
  });
});
