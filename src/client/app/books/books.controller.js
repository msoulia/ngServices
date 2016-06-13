(function () {
    'use strict';

    angular
      .module('app.books')
      .controller('BooksController', BooksController);

      //BooksController.$inject = ['$q', 'bookConstants', 'dataservice', 'booklogger', 'logger'];
      BooksController.$inject = ['books', 'dataservice', 'booklogger', 'logger'];

      //function BooksController($q, bookConstants, dataservice, booklogger, logger) {
      function BooksController(books, dataservice, booklogger, logger) {
        // using ng's 'Controller as' syntax, so we don't need to inject $scope
        var vm = this;

        vm.title = books.appTitle;
        vm.appDesc = books.appDesc;
        vm.appVersion = books.appVersion; //books.version;

        vm.allBooks = dataservice.getAllBooks();

        booklogger.output('BooksController has been created.');
        logger.info('Activated BooksController View');
      }
}());
