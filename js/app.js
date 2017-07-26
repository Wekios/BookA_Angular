var app = angular.module('ReaderApp', ['ngRoute']);

app.config(function($routeProvider){
  
  $routeProvider.when('/books', {
    controller: 'BookshelfController',
    templateUrl: 'views/bookshelf.html'
  });
  
  $routeProvider.when('/books/:bookId', {
    controller: 'BookController',
    templateUrl: 'views/book.html'
  });
  
  $routeProvider.when('/books/:bookId/chapters/:chapterId', {
    controller: 'ChapterController',
    templateUrl: 'views/chapter.html'
  });
  
  $routeProvider.otherwise({
    redirectTo: '/books'
  });
  
});