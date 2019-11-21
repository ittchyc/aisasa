$('#login-button').click(function (event) {
  event.preventDefault();
  $('form').fadeOut(500);
  $('.wrapper').addClass('form-success');
  var username = $('#username').val()
  var password = $('#password').val()
  setTimeout(e => {
    if (username === 'zhangsa' && password === 'hanyongchao') {
      window.location.href = 'loading.html';
      sessionStorage.setItem('_hzs', '929799..');
    } else {
      $('form').fadeIn(500);
      $('.wrapper').removeClass('form-success');
    }
  }, 1000)
});