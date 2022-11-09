function clearInputs() {
  $('#current-password-error').html('');
  $('#new-password-error').html('');
  $('#new-password-confirmation-error').html('');
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

    const salutation = $('.profile__salutation-select').select2('data');
    const currentPassword = $('#current-password-input').val();
    const newPassword = $('#new-password-input').val();
    const newPasswordConfirmation = $('#new-password-confirmation-input').val();

    let hasError = false;
    if (!currentPassword) {
      $('#current-password-error').html('Please enter your current password');
      hasError = true;
    }
    
    if (!newPassword) {
      $('#new-password-error').html('Please enter your new password');
      hasError = true;
    } else if (newPassword.length < 6) {
      $('#new-password-error').html('Password should be at least 6 characters');
      hasError = true;
    }

    if (!newPasswordConfirmation) {
      $('#new-password-confirmation-error').html('Please repeat your new password');
      hasError = true;
    } else if (newPasswordConfirmation.length < 6) {
      $('#new-password-confirmation-error').html('Password should be at least 6 characters');
      hasError = true;
    } else if (newPassword !== newPasswordConfirmation) {
      $('#new-password-confirmation-error').html('New password does not match');
      hasError = true;
    } else if (currentPassword === newPasswordConfirmation) {
      $('#new-password-confirmation-error').html('New password should not be same as current password');
      hasError = true;
    }

    if (hasError) return;

    window.location.href = '../1_1_homepage/index.html';
  });
});
