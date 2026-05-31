function setStatus(message) {
  document.getElementById('status').textContent = message;
}
function handleMouseOver(fig) {
  fig.classList.add('hovered');
  var caption = fig.querySelector('figcaption');
  setStatus('Viewing: ' + (caption ? caption.textContent : ''));
}
function handleMouseLeave(fig) {
  fig.classList.remove('hovered');
  setStatus('');
}
function handleFocus(fig) {
  fig.classList.add('focused');
  var caption = fig.querySelector('figcaption');
  setStatus('Focused: ' + (caption ? caption.textContent : ''));
}
function handleBlur(fig) {
  fig.classList.remove('focused');
  setStatus('');
}
function initGallery() {
  console.log('initGallery() fired — page loaded.');
  var figures = document.querySelectorAll('figure');
  for (var i = 0; i < figures.length; i++) {
    figures[i].setAttribute('tabindex', '0');
    console.log('tabindex set on figure ' + (i + 1));
  }
  console.log('Done. Total figures: ' + figures.length);
}
