(function () {
    'use strict';

    angular
      .module('app.books')
      .controller('BooksController', BooksController);

      //BooksController.$inject = ['$q', 'bookConstants', 'dataservice', 'booklogger', 'logger'];
      BooksController.$inject = ['$q', 'books', 'dataservice', 'booklogger', 'logger', 'badgeService'];

      //function BooksController($q, bookConstants, dataservice, booklogger, logger) {
      function BooksController($q, books, dataservice, booklogger, logger, badgeService) {
        // using ng's 'Controller as' syntax, so we don't need to inject $scope
        var vm = this;

        vm.title = books.appTitle;
        vm.appDesc = books.appDesc;
        vm.appVersion = books.appVersion; //books.version;

        // Another data retrieval technique
        // var booksPromise = dataservice.getAllBooks();
        // var readersPromise = dataservice.getAllReaders();
        //
        // $q.all([booksPromise, readersPromise])
        //   .then(getAllDataSuccess)
        //   .catch(getAllDataError);
        //
        // function getAllDataSuccess(dataArray) {
        //   vm.allBooks = dataArray[0];
        //   vm.allReaders = dataArray[1];
        // }
        //
        // function getAllDataError(e) {
        //   console.log(e);
        // }

        //vm.allBooks = dataservice.getAllBooks();
        dataservice.getAllBooks()
          .then(getBooksSuccess, null, getBooksNotification)
          .catch(errorCallback)
          .finally(getAllBooksComplete);

        function getBooksSuccess(books) {
          //throw 'error in success handler';
          vm.allBooks = books;
        }

        // function getBooksError(reason) {
        //   console.log(reason);
        // }

        function errorCallback(errorMsg) {
          console.log('Error Message: ' + errorMsg);
        }

        function getBooksNotification(notification) {
          console.log('Promise notifcation: ' + notification);
        }

        function getAllBooksComplete() {
          console.log('getAllBooks has completed.');
        }

        //vm.allReaders = dataservice.getAllReaders();
        dataservice.getAllReaders()
          .then(getAllReadersSuccess)
          .catch(errorCallback)
          .finally(getAllReadersComplete);

        function getAllReadersSuccess(readers) {
          vm.allReaders = readers;
        }

        function getAllReadersComplete() {
          console.log('getAllREaders has completed.');
        }

        vm.getBadge = badgeService.retrieveBadge;

        booklogger.output('BooksController has been created.');
        logger.info('Activated BooksController View');
      }
}());
