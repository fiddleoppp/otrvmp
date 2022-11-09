$(document).ready(function() {
  $('.account-menu').select2({
    width: '100%',
    dropdownCssClass: 'dropdown__container dropdown__container_large',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });

  $('.account-menu').on('select2:select', function (e) {
    const data = e.params.data;
    if (data.id === 'Edit Profile') {
      window.location.href = '../9_1_edit_profile/index.html';
    } else if (data.id === 'My Wishlist') {
      window.location.href = '../8_1_my_wishlist/index.html';
    } else if (data.id === 'My Address Book') {
      window.location.href = '../10_3_address_book_filled/index.html';
    } else if (data.id === 'Order History') {
      window.location.href = '../6_1_order_history/index.html';
    } else if (data.id === 'Change Password') {
      window.location.href = '../9_2_change_password/index.html';
    }
  });
});
