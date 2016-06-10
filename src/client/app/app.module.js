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
    // First Technique
  ])
    .config(function($provide) {

        $provide.provider('books', function () {
          this.$get = function () {

            var appName = 'Book Logger';

            return {
              appName: appName
            };
          };
        });
    });

})();
