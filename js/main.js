(function (window) {
  'use strict';

  window.main = function () {
    var $searchInput = window.document.querySelector('.todo-search-input');
    var $list = window.document.querySelector('.todo-list');

    var getItems = function () {
      return $list.querySelectorAll('.todo-list-item') || [];
    };

    var search = function () {
      var val = $searchInput.value.trim();
      Array.prototype.forEach.call(getItems(), function (item) {
        if (!~item.innerHTML.indexOf(val)) {
          item.classList.add('is-hidden');
        } else {
          item.classList.remove('is-hidden');
        }
      });
    };

    $searchInput.addEventListener('keyup', search);
  };

})(this);
