portfolioApp.controller("PortfolioListController", 
  function($scope, FIREBASE_URL, $firebaseArray, 
    $firebaseObject, PortService){


    $scope.message = "";

    $scope.portfolios = [];

    var ref = new Firebase(FIREBASE_URL);
    var postRef = ref.child('portfolios');
    $scope.portfolios = $firebaseArray(postRef);



//$log angular log


//    console.log(postRef.key()); // this is portfolios in firebase

var portSnapshot;
var date;


//snapshot built into firebase
// .on sets up monitoring



//postRef.on('value', function(snapshot){
 
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read operation failed: " + errorObject.code);
// });



postRef.once('value', function(dataSnapshot){

  portSnapshot = dataSnapshot;
  var portDate = portSnapshot.child('-JoC1gdvvWBNyCrQEpKQ').child('creationDate');

var portdateVal = portDate.val();
date = new Date(portdateVal); // javascript formats


   //specific portfolio
  console.log('This is portdate = ' + portDate.val()); // .val gets you a non-object string
  console.log('This is datedate = ' + date); // .val gets you a non-object string
 // console.log(portSnapshot.val());


//$scope.creationDate = date; 
// call the service:

$scope.creationDate = PortService.formatDate(date); 


}, function (errorObject) {
  console.log("The read operation failed: " + errorObject.code);
});

// API Key: Ao2AL3xLQ9GAam03ar2oyz
//{"url":"https://www.filepicker.io/api/file/bo79ExERKmz6gv8kOPNU",
//"filename":"Pierre_LeGrand.jpg",
//"mimetype":"image/jpeg",
//"size":168177,
//"isWriteable":true}

var imageUpped;

$scope.addImage = function( new_image ){


//AQVb0IejTR9edqZ2imH0Uz

filepicker.setKey("AQVb0IejTR9edqZ2imH0Uz");

filepicker.pick(
  {
    mimetypes: ['image/*', 'text/plain'],
    container: 'window',
    services:['COMPUTER'],
  },
  function(Blob){
    imageUpped = Blob.url;
    console.log(imageUpped);
  },
  function(FPError){
    console.log(FPError.toString());
  }
);

//x = document.getElementById("file-upload").innerHTML = ;
//console.log("filename is : " + x);


}



    $scope.addPortfolio = function( new_portfolio ) {

      var pushRef = new Firebase(FIREBASE_URL + '/portfolios');

      pushRef.push({
        name: new_portfolio.name,
        creationDate: Firebase.ServerValue.TIMESTAMP,
        title: new_portfolio.title,
        description: new_portfolio.description,
        imageurl: imageUpped 
      });

      //$scope.adding_portfolio.title = "";
      $scope.adding_portfolio = {}; //this also works to clear input

      // must set each field individually, using entire form does not work
      $scope.add_portfolio.title.$setPristine();
      $scope.add_portfolio.name.$setPristine();
      $scope.add_portfolio.description.$setPristine();
      $scope.message = "Successfully added portfolio " + new_portfolio.name;

    };

  $scope.removePortfolio = function(portname) {
   
    var temp = JSON.stringify(portname, null, 4);
    var pushRef = new Firebase(FIREBASE_URL + '/portfolios');

console.log("inside removePortfolio" + temp);

    obj = JSON.parse(temp);
console.log("object name is " + obj.name ); //YES this works to creat an object
console.log("object title is " + obj.title ); //YES this works to creat an object
console.log("object id is " + obj.$id ); //YES this works to creat an object

    var myname = obj.$id;
console.log("myname is " + myname);


    var onComplete = function(error) {
      if (error) {
        console.log('Remove failed');
      } else {
        console.log('Remove succeeded');
      }
    };

    pushRef.child(obj.$id).set({name: null}, onComplete);//same as delete



      //*

 

var count = 0;
postRef.on("child_added", function(snap) {
  count++;
  console.log("added", snap.key());
});



pushRef.on("value", function(snapshot) {
  newdata = snapshot.val();
  console.log("snapshot val is " + snapshot.val());
  console.log("snapshot key is " + snapshot.key());

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});



//*


    };//end removePortfolio



    // postRef.set({
    //   'vessel1309': {
    //     name: 'vessel1309', 
    //     title: 'Call of Booty', 
    //     date: '2013-09-01', 
    //     description: 'Arrrgh mateys! This be the finest vessel sailing these seas that yer eyes ever laid sight on. Arrrgh.', 
    //     imageurl: 'images/drunkenPirate_thumb3.png' 
    //   },

    //   'innocents1404': {
    //     name: 'innocents1404', 
    //     title: 'The Sack of the Innocents', 
    //     date: '2014-04-15', 
    //     description: 'This be a detail of the sacking of the innocents where I played an important role as business analyst and in implementation.', 
    //     imageurl: 'images/drunkenPirate_thumb2.png' 
    //   },

    //   'firstmate1210': {
    //     name: 'firstmate1210', 
    //     title: 'Pipe and First Mate', 
    //     date: '2012-10-01', 
    //     description: 'After a hard day of lootin\' and shootin\' I like to relax with my best mates and tally up the days booty.', 
    //     imageurl: 'images/drunkenPirate_thumb1.png' }

    //   });

    // $scope.addPortfolio = function( new_portfolio ) {
    //   $scope.portfolios.push( new_portfolio );
    //   $scope.add_portfolio = {};
    // };

  }); //end of controller

























