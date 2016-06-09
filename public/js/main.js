if ( window.innerWidth <= 401 ) {
  $('.content-header').css('height', window.innerWidth - $('.post-title').height() + 50);
}
else if ( window.innerWidth > 423 && window.innerWidth < 896) {
  $('.content-header').css('height', 'auto');
}
else if ( window.innerWidth > 896 ) {
  $('.content-header').css('height', '100%');
}

$(window).resize(function() {
  if ( window.innerWidth <= 401 ) {
    $('.content-header').css('height', window.innerWidth - $('.post-title').height() + 50);
  }
  else if ( window.innerWidth > 423 && window.innerWidth < 896) {
    $('.content-header').css('height', 'auto');
  }
  else if ( window.innerWidth > 896 ) {
    $('.content-header').css('height', '100%');
  }
});
