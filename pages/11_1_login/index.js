function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function clearInputs() {
  $('#email-input-error').html('');
  $('#password-input-error').html('');
}

$(document).ready(function() {
  $('#password-visibility').click(function(e) {
    $('.textfield_password').toggleClass('textfield_password-show');
    const showPassword = $('.textfield_password').hasClass('textfield_password-show');
    if (showPassword) {
      $('#password-input').prop('type', 'text')
    } else {
      $('#password-input').prop('type', 'password')
    }
  });

  $('#signin-btn').click(function(e) {
    e.preventDefault();
    clearInputs();

    const email = $('#email-input').val();
    const password = $('#password-input').val();
    const rememberMe = $('#remember-me-checkbox').is(':checked');
    
    let hasError = false;
    if (!email) {
      $('#email-input-error').html('Please enter your email address');
      hasError = true;
    } else if (!isEmail(email)) {
      $('#email-input-error').html('Please enter a valid email address');
      hasError = true;
    }

    if (!password) {
      $('#password-input-error').html('Please enter your password');
      hasError = true;
    } else if (password.length < 6) {
      $('#password-input-error').html('Password should be at least 6 characters');
      hasError = true;
    }
    
    if (hasError) return;

    window.location.href = '../1_1_homepage/index.html';
  });
});
