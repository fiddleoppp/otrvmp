function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function clearInputs() {
  $('#name-input-error').html('');
  $('#email-input-error').html('');
  $('#email-confirmation-input-error').html('');
  $('#password-input-error').html('');
  $('#password-confirmation-input-error').html('');
}

$(document).ready(function() {
  $('.profile__salutation-select').select2({
    width: 140,
    dropdownCssClass: 'dropdown__container',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });

  $('#create-account-btn').click(function(e) {
    e.preventDefault();
    clearInputs();

    const salutation = $('.profile__salutation-select').select2('data');
    const name = $('#name-input').val();
    const email = $('#email-input').val();
    const emailConfirmation = $('#email-confirmation-input').val();
    const password = $('#password-input').val();
    const passwordConfirmation = $('#password-confirmation-input').val();
    const isSubscribingPromo = $('#promo-checkbox').is(':checked');

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

    if (!emailConfirmation) {
      $('#email-confirmation-input-error').html('Please enter your email address confirmation');
      hasError = true;
    } else if (!isEmail(emailConfirmation)) {
      $('#email-confirmation-input-error').html('Please a valid email address');
      hasError = true;
    } else if (email !== emailConfirmation) {
      $('#email-confirmation-input-error').html('Email address confirmation does not match');
      hasError = true;
    } 
    
    if (!password) {
      $('#password-input-error').html('Please enter your password');
      hasError = true;
    } else if (password.length < 6) {
      $('#password-input-error').html('Password should be at least 6 characters');
      hasError = true;
    }

    if (!passwordConfirmation) {
      $('#password-confirmation-input-error').html('Please enter your password confirmation');
      hasError = true;
    } else if (passwordConfirmation.length < 6) {
      $('#password-confirmation-input-error').html('Password should be at least 6 characters');
      hasError = true;
    } else if (password !== passwordConfirmation) {
      $('#password-confirmation-input-error').html('Password confirmation does not match');
      hasError = true;
    } 
    
    if (hasError) return;

    window.location.href = '../1_1_homepage/index.html';
  });
});
