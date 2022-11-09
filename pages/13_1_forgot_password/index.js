function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$(document).ready(function() {
  $('#reset-email-btn').click(function(e) {
    e.preventDefault();
    const val = $('#reset-email-input').val();

    if (!val) {
      $('#reset-email-error').html('Please enter your email address');
      return;
    }

    const isValidEmail = isEmail(val);

    if (!isValidEmail) {
      $('#reset-email-error').html('Please enter a valid email address');
      return;
    }
    
    window.location.href = '../13_2_email_submitted/index.html';
  });
});
