$(document).ready(function() {
  $.each($('.card-product__multiple-option'), function(index, val) {
    if($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    }
  });
  $(document).on('click', '.card-product__multiple-option', function(event) {
    $(this).parents('.card-product__options-container').find('.card-product__multiple-option').removeClass('active');
    $(this).toggleClass('active');
    $(this).find('input').prop('checked', true);
  })
});