$(document).on('contextmenu', function(e) {
  $('.context-menu').css({
    top: e.pageY,
    left: e.pageX,
    display: 'block'
  });
  
  $('h1').fadeOut('fast');
  
  return false;
});

$(document).click(function(e) {
  if (e.which == 1) {
    $('.context-menu').hide();
  }
});

$(document).keydown(function(e) {
  if (e.which == 27) {
    $('.context-menu').hide();
  }
});