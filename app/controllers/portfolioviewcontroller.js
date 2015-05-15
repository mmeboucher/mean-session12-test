  portfolioApp.controller("PortfolioViewerController", function($scope,
    $routeParams, FIREBASE_URL, $firebaseArray, $firebaseObject){

    $scope.portfolio_name = $routeParams.portfolio_name;

    var portfolio_name = $routeParams.portfolio_name;
//  var pushImg = new Firebase(FIREBASE_URL + '/images/' + portfolio_name);
 	  var pushImg = new Firebase(FIREBASE_URL + '/images/');

  //  $scope.portfolios = $firebaseObject(pushImg);
    $scope.portfolios = $firebaseArray(pushImg);

    console.log("scope portfolios is " + $scope.portfolios);
    console.log("route params is " + portfolio_name);

    var imageUpped;

//*******************************************
$scope.updImage = function( new_image ){

  console.log("made it inside update " + portfolio_name + $scope.portfolio_name);

  filepicker.setKey("AQVb0IejTR9edqZ2imH0Uz"); 

  filepicker.pick(
  {
    mimetypes: ['image/*', 'text/plain'],
    container: 'window',
 // container: 'filepicker_comm_iframe',
    services:['COMPUTER'],
  },

  function(Blob){
    console.log(JSON.stringify(Blob));
    imageUpped = Blob.url;

    console.log("imageUpped inside updImage is " + imageUpped);
 //   $scope.imageUpped = imageUpped;
  
     var setRef = new Firebase(FIREBASE_URL + '/images');
     
      var onComplete = function(error) {
        if (error) {
          console.log('Firebase Update  failed');
        } else {
          console.log('Firebase Update succeeded');
        }
      };

      setRef.key === $scope.portfolio_name;

      console.log("imageUpped before set is " + imageUpped);

      console.log("Daniel: " + setRef.child(portfolio_name));

 setRef.child(portfolio_name).set(

    {name: $scope.portfolio_name,
    filename: imageUpped,
    date: "2013/09/05",
    description: "I love this testtesttest, so much booty." },
 
    onComplete

  );
      $scope.message = "Successfully updated image " + portfolio_name;

  }, // function Blob

    function(FPError){
    console.log(FPError.toString());
    }

  );  //filepicker pick


};//end of updImage


//*************************************************

// use set instead of push 

 $scope.updateFirebasePage2 = function(portf_name) {

  console.log("made it inside update " + portf_name);

   //   var setRef = new Firebase(FIREBASE_URL + '/images' + portf_name);
     var setRef = new Firebase(FIREBASE_URL + '/images');

      // pushRef.set({
      //   name: portf_name,
      //   creationDate: Firebase.ServerValue.TIMESTAMP,
      //   title: "testtesttitle",
      //   description: "testtest description",
      //   imageurl: imageUpped 
      // });


  var onComplete = function(error) {
      if (error) {
        console.log('Update  failed');
      } else {
        console.log('Update succeeded');
      }
    };

setRef.key === portf_name;

 setRef.set(

 [
  { name: portf_name,
  filename: "350.png",
  //  filename: imageUpped,
  date: "2013/09/05",
  description: "I love this testtesttest, so much booty." },
  { name: portf_name,
    filename: "350.png",
  date: "2013/09/06",
  description: "We had a wonderful testtesttime on her."}], onComplete

  );

      //$scope.adding_portfolio.title = "";
//      $scope.adding_portfolio = {}; //this also works to clear input

      // must set each field individually, using entire form does not work
      // $scope.add_portfolio.title.$setPristine();
      // $scope.add_portfolio.name.$setPristine();
      // $scope.add_portfolio.description.$setPristine();
      $scope.message = "Successfully added image " + portf_name;

    };//end of updateFirebasePage2


$scope.showPortfolio = function(portname) {

   var portSnapshot;

    var temp = JSON.stringify(portname, null, 4);
    var pushRef = new Firebase(FIREBASE_URL + '/images' + '/' + portname);
    

console.log("inside showPortfolio " + temp);
console.log("inside showPortfolio pushRef " + pushRef);


pushRef.once('value', function(dataSnapshot){

  portSnapshot = dataSnapshot.val();
  console.log("portshapshot is " + portSnapshot);

  temp = JSON.stringify(portSnapshot, null, 4);

console.log("inside showPortfolio again " + temp);

    obj = JSON.parse(temp);
console.log("object name is " + obj[0].name ); //YES this works to creat an object
console.log("object title is " + obj[0].description); //YES this works to creat an object

 
}, function (errorObject) {
  console.log("The read operation failed in showPortfolio: " + errorObject.code);
});


    };//end showPortfolio


});//end of controller

//********************************************************


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

  































