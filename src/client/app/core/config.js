(function() {
  'use strict';

  var core = angular.module('app.core');

  // First Technique
  // core.config(function($provide) {
  //
  //     $provide.provider('books', function () {
  //       this.$get = function () {
  //
  //         var appName = 'Book Logger';
  //
  //         return {
  //           appName: appName
  //         };
  //       };
  //     });
  // });

  // Second Technique
  core.provider('books', function (bookConstants) {
        this.$get = function () {

          var appTitle = bookConstants.APP_TITLE; //'Book Logger';
          var appDesc = bookConstants.APP_DESC; //'Track your books';
          var appVersion = bookConstants.APP_VERSION; // '1.0';

          if (includeVersionInTitle) {
            appTitle += ' ' + appVersion;
          }

          return {
            appTitle: appTitle,
            appDesc: appDesc,
            appVersion: appVersion
          };
        };

        /* jshint -W003*/
        var includeVersionInTitle = false;
        this.setIncludeVersionInTitle = function (value) {
          includeVersionInTitle = value;
        };
      });

  // NAMING CONVENTION!!! We created a 'books' provider above. ng automajically appends
  // 'Provider' to create 'booksProvider'

  // core.config(function(booksProvider, bookConstants) {
  //   booksProvider.setIncludeVersionInTitle(true);
  //   console.log('Title from book_constants service: ' + bookConstants.APP_TITLE);
  // });

  core.config(booksProviderConfig);

  booksProviderConfig.$inject = ['booksProvider', 'bookConstants'];

  function booksProviderConfig(booksProvider, bookConstants) {
    booksProvider.setIncludeVersionInTitle(true);
    console.log('Title from mangled book_constants service: ' + bookConstants.APP_TITLE);
  }

  core.config(toastrConfig);

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  var config = {
    appErrorPrefix: '[ngServices Error] ',
    appTitle: 'ngServices'
  };

  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }

})();
