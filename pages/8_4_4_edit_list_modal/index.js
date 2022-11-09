$(document).ready(function() {
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
