function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function clearInputs() {
  $('#name-input-error').html('');
  $('#email-input-error').html('');
}


$(document).ready(function() {
  $('.profile__salutation-select').select2({
    width: 140,
    dropdownCssClass: 'dropdown__container',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });

  $('#save-btn').click(function(e) {
    e.preventDefault();
    clearInputs();

    const name = $('#name-input').val();
    const email = $('#email-input').val();

    let hasError = false;
    if (!name) {
      $('#name-input-error').html('Please enter your full name');
      hasError = true;
    }

    if (!email) {
      $('#email-input-error').html('Please enter your email address');
      hasError = true;
    } else if (!isEmail(email)) {
      $('#email-input-error').html('Please enter a valid email address');
      hasError = true;
    }

    if (hasError) return;
    window.alert('Changes saved!');
  });
});
