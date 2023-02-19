var app = angular.module('myApp', ['ngRoute']);

// configuration code

app.config(function($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'SPA/home.html',
        controller: 'HomeController'
    })

    .when('/blog', {
        templateUrl: 'SPA/blog.html',
        controller: 'BlogController'
    })

    .when('/about', {
        templateUrl: 'SPA/about.html',
        controller: 'AboutController'
    })

    .otherwise({
        redirectTo:'/'
    });

    // this is controller code

    app.controller('HomeController', function($scope){
        $scope.message = "Hello from HomeController";
    });

    app.controller('BlogController', function($scope){
        $scope.message = "Hello from BlogController";
    });

    app.controller('AboutController', function($scope){
        $scope.message = "Hello from AboutController";
    });
});