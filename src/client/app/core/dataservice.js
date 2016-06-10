(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getPeople: getPeople,
      getMessageCount: getMessageCount,
      getAllBooks: getAllBooks,
      getAllReaders: getAllReaders
    };

    return service;

    function getAllBooks() {
      return [
        { book_id: 1, title: 'Book_1', author: 'Author_1', year_published: 1960},
        { book_id: 2, title: 'Book_2', author: 'Author_2', year_published: 1961},
        { book_id: 3, title: 'Book_3', author: 'Author_3', year_published: 1962},
        { book_id: 4, title: 'Book_4', author: 'Author_4', year_published: 1963},
        { book_id: 5, title: 'Book_5', author: 'Author_5', year_published: 1964}
      ];
    }

    function getAllReaders() {
      return [
        { reader_id: 1, name: 'Reader_1', weeklyReadingGoal: 100, totalMinutesRead: 1960},
        { reader_id: 2, name: 'Reader_2', weeklyReadingGoal: 200, totalMinutesRead: 1961},
        { reader_id: 3, name: 'Reader_3', weeklyReadingGoal: 300, totalMinutesRead: 1962},
        { reader_id: 4, name: 'Reader_4', weeklyReadingGoal: 400, totalMinutesRead: 1963},
        { reader_id: 5, name: 'Reader_5', weeklyReadingGoal: 500, totalMinutesRead: 1964}
      ];
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
