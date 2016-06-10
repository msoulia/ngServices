(function () {
    'use strict';

    angular
      .module('app.books')
      .controller('BooksController', BooksController);

      BooksController.$inject = ['$q', 'dataservice', 'booklogger', 'logger'];

      function BooksController(books, dataservice, booklogger, logger) {
        // using ng's 'Controller as' syntax, so we don't need to inject $scope
        var vm = this;

        vm.appName = books.APP_TITLE;
        vm.appVersion = 'version1'; //books.version;

        vm.allBooks = dataservice.getAllBooks();

        booklogger.output('BooksController has been created.');
        logger.info('Activated BooksController View');
      }
}());
