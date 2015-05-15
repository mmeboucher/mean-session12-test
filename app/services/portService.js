portfolioApp.service("PortService", [function($scope){

console.log('made it inside the port service');

//hint - do code first then put into an object, need to return it

var myObject = {

	formatDate: function(serverdate){


	var monthNames = [
		"January", "February", "March", "April", "May", "June", "July",
		"August", "September", "October", "November", "December"
	];

	var date = new Date(serverdate);
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	//console.log('Date: ISSSSSS' + day + ' ' + monthNames[monthIndex] + ' ' + year);
	dateResult = ( day + ' ' + monthNames[monthIndex] + ' ' + year);
	console.log("dateResult = " + dateResult);
	return dateResult;
	


}};//myObject

return myObject;



}]);

