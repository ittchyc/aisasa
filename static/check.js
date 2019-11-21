let token = sessionStorage.getItem('_hzs');
if (!token || token !== '929799..') {
  window.location.href = 'index.html';
}
