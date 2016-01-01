//app.js angular file

var app = angular.app('InstaCatalogApp',[]);


app.controller('InstagramListCtrl',function(){


	
	$scope.photos=[
		{'name':'Pic 1',
		'description':'Me and the new #Whip'},
		{'name':'Pic with the #bae'}

	];
});


