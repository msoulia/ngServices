(function() {
  'use strict';

  angular.module('app', [
    'app.core',
    'app.widgets',
    'app.admin',
    'app.dashboard',
    'app.layout',
    'app.books'
  //]);
    // First Technique - this doesn't go here! Place it in config.js (which extends app.core.js)
  ]);
    // .config(function($provide) {
    //
    //     $provide.provider('books', function () {
    //       this.$get = function () {
    //
    //         var appName = 'Book Logger from app.module.js';
    //
    //         return {
    //           appName: appName
    //         };
    //       };
    //     });
    // });

})();
