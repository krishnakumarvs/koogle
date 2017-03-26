var appName = "kakes";
var app = angular.module(appName, ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when("/home", {
			templateUrl: "app/home/template/home.html",
			controller: "HomeController as Home"
		})

	.when("/krishnakumar", {
		templateUrl: "app/krishnakumarvs/template/krishnakumarvs.html"
			/*controller: "HomeController as Home"*/
	})

	.otherwise({
		redirectTo: '/home'
	});
});