portfolioApp.service("AddImageService", [function($scope){





console.log('made it inside the addimag service');

//hint - do code first then put into an object, need to return it

var myObject = {

//	formatDate: function(serverdate){
	saveUrl: function(imageUrl){


	var newUrl = imageUrl;
	console.log("inside add image service newUrl = " + newUrl);
	
	
	return newUrl;


}};//myObject

return myObject;

}]);