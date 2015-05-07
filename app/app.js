var portfolioApp = angular.module('portfolioApp',['ngRoute', 'firebase']).constant('FIREBASE_URL', 'https://dd-pirate-portfolio.firebaseio.com/');

portfolioApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/portfolio/:portfolio_name', {
			controller: 'PortfolioViewerController',
			templateUrl: 'partials/portfolio_viewer.html'
		})
		.when('/', {
			templateUrl: "partials/portfolios.html",
			controller: "PortfolioListController"
		})
		.otherwise({ 
			redirectTo: "/404"
		});
	}
	]);