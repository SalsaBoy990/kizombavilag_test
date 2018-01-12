'use strict';
(function() {
  var select = document.getElementById('select-menu');
  if (select.addEventListener) {
    select.addEventListener('change', function () {
      if (this.value) {
        window.location.href = this.value;
      }
    });
  } else {
    select.attachEvent('change', function () {
      if (this.value) {
        window.location.href = this.value;
      }
    });
  }
}());
