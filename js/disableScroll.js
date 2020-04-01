/* =============================
 * Disable / Enable Page Scroll
 * when Bootstrap Modals are
 * shown / hidden
 * ============================= */

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function theMouseWheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', theMouseWheel, false);
  }
  window.onmousewheel = document.onmousewheel = theMouseWheel;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', theMouseWheel, false);
    }
    window.onmousewheel = document.onmousewheel = null;  
}

$(function () {
  // disable page scrolling when modal is shown
  $(".modal").on('show', function () { disable_scroll(); });
  // enable page scrolling when modal is hidden
  $(".modal").on('hide', function () { enable_scroll(); });
});