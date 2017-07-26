app.factory('books', ['$http', function($http){
  
  return $http.get('books.json');
  
}]);