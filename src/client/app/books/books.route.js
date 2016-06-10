(function() {
  'use strict';

  angular
    .module('app.books')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'books',
        config: {
          url: '/books',
          templateUrl: 'app/books/books.html',
          controller: 'BooksController',
          controllerAs: 'vm',
          title: 'Books',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> Books'
          }
        }
      }
    ];
  }
})();
