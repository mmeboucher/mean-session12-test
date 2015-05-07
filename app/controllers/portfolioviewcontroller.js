  portfolioApp.controller("PortfolioViewerController", function($scope, $routeParams, FIREBASE_URL, $firebaseArray, $firebaseObject){
  	$scope.portfolio_name = $routeParams.portfolio_name;
  	// $scope.load_error_text = "";
    var portfolio_name = $routeParams.portfolio_name;
  	var pushImg = new Firebase(FIREBASE_URL + '/images/' + portfolio_name);

    $scope.portfolios = $firebaseObject(pushImg);
   //  pushImg.set({ 

  	// 	'vessel1309': [
  	// 	{ filename: "350.png",
  	// 	date: "2013/09/05",
  	// 	description: "I love this boat, so much booty." },
  	// 	{ filename: "350.png",
  	// 	date: "2013/09/06",
  	// 	description: "We had a wonderful time on her."}],

  	// 	'innocents1404': [
  	// 	{ filename: "350.png",
  	// 	date: "2014/04/14",
  	// 	description: "So cold and so much sacking!" },
  	// 	{ filename: "350.png",
  	// 	date: "2014/04/15",
  	// 	description: "The sails are so white here."}],

  	// 	'firstmate1210': [
  	// 	{ filename: "350.png",
  	// 	date: "2012/10/01",
  	// 	description: "Getting mah pipe on!"},
  	// 	{ filename: "350.png",
  	// 	date: "2012/10/02",
  	// 	description: "FTW!!!11!one!1"}]
  	// });

  	// if (portfolios[$scope.portfolio_name]) {
  	// 	$scope.portfolios = portfolios[$scope.portfolio_name];
  	// 	console.log($scope.portfolios);
  	// } else {
  	// 	$scope.load_error_text = "Aaaargh! I can't find that darn portfolio matey!";
  	// }

  });































