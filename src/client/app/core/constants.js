/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('bookConstants' , {
      APP_TITLE: 'Book Logger',
      APP_DESC: 'Track your books',
      APP_VERSION: '1.0'
    });
})();
