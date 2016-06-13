(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', '$timeout', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, $timeout, exception, logger) {
    var service = {
      getPeople: getPeople,
      getMessageCount: getMessageCount,
      getAllBooks: getAllBooks,
      getAllReaders: getAllReaders
    };

    return service;

    /* jshint -W106 */
    function getAllBooks() {
      var booksArray = [
        { book_id: 1, title: 'Book_1', author: 'Author_1', year_published: 1960},
        { book_id: 2, title: 'Book_2', author: 'Author_2', year_published: 1961},
        { book_id: 3, title: 'Book_3', author: 'Author_3', year_published: 1962},
        { book_id: 4, title: 'Book_4', author: 'Author_4', year_published: 1963},
        { book_id: 5, title: 'Book_5', author: 'Author_5', year_published: 1964}
      ];

      var deferred = $q.defer();

      $timeout(function() {
        var successful = true;
        if(successful) {
          deferred.notify('Working on it...');
          deferred.resolve(booksArray);
        } else {
          deferred.reject('Error retrieving books.');
        }
      }, 1500);

      return deferred.promise;
    }

    function getAllReaders() {
      var readersArray = [
        { reader_id: 1, name: 'Reader_1', weeklyReadingGoal: 100, totalMinutesRead: 5960},
        { reader_id: 2, name: 'Reader_2', weeklyReadingGoal: 200, totalMinutesRead: 5961},
        { reader_id: 3, name: 'Reader_3', weeklyReadingGoal: 300, totalMinutesRead: 1962},
        { reader_id: 4, name: 'Reader_4', weeklyReadingGoal: 400, totalMinutesRead: 1963},
        { reader_id: 5, name: 'Reader_5', weeklyReadingGoal: 500, totalMinutesRead: 164}
      ];

      var deferred = $q.defer();

      $timeout(function() {
        deferred.resolve(readersArray);
      }, 2000);

      return deferred.promise;
    }

    function getMessageCount() { return $q.when(72); }

    function getPeople() {
      return $http.get('/api/people')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }
  }
})();
