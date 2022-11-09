function clearInputs() {
  $('#name-error').html('');
  $('#address-error').html('');
  $('#contact-error').html('');
  $('#postcode-error').html('');
  $('#delivery-area-error').html('');
}

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

  $('#save-btn').click(function(e) {
    e.preventDefault();
    clearInputs();

    const receipientName = $('#name-input').val();
    const address1 = $('#address-1-input').val();
    const address2 = $('#address-2-input').val();
    const address3 = $('#address-3-input').val();
    const contactNumber = $('#contact-input').val();
    const companyName = $('#company-input').val();
    const postCode = $('#postcode-input').val();
    const area1 = $('#delivery-area-1-input').val();
    const area2 = $('#delivery-area-2-input').val();

    let hasError = false;
    if (!receipientName) {
      $('#name-error').html('Please enter your full name');
      hasError = true;
    }
    
    if (!address1 && !address2 && !address3) {
      $('#address-error').html('Please enter your address detail');
      hasError = true;
    }
    
    if (!contactNumber) {
      $('#contact-error').html('Please enter your contact number');
      hasError = true;
    } else if (contactNumber.length < 9 || contactNumber.length > 15) {
      $('#contact-error').html('Contact number should be between 9-15 characters');
      hasError = true;
    }

    if (!postCode) {
      $('#postcode-error').html('Please enter your postal code');
      hasError = true;
    } else if (postCode.length !== 5) {
      $('#postcode-error').html('Postal code should be exactly 5 characters');
      hasError = true;
    }

    if (!area1 || !area2) {
      $('#delivery-area-error').html('Please select your delivery area');
      hasError = true;
    }
    
    if (hasError) return;
    
    window.location.href = '../10_3_address_book_filled/index.html';
  });

  $('#cancel-btn').click(function(e) {
    e.preventDefault();
    window.location.href = '../10_1_address_book/index.html';
  });
});
