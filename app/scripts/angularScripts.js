var app = angular.module('APP', ['ngRoute']);

//Config
app.config(function($routeProvider){
	$routeProvider.
	when('/', {templateUrl:'../partials/home.html'}).
	when('/about',{templateUrl:'partials/about.html', controller:'aboutController'}).
	otherwise({redirectTo: '/'})
});

//Controllers
app.controller('homeController', ['$scope', function($scope){
	/* ... */

}]);

app.controller('aboutController', ['$scope', function($scope){
	var appAbout = document.querySelector("#about");
	appAbout.page = 'about';
}]);