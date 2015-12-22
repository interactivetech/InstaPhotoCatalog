//controller jsvar app = angular.app('InstaCatalogApp',[]);

var app=angular.module('InstaCatalogApp',[]);
//declared controller and registered it in AngularJS module
app.controller('InstagramListCtrl',function($scope){
	
	$scope.pics=[
		{'name':'Pic 1',
		'description':'Me and the new #Whip'},
		{'name':'Pic 2',
		'description':'Pic with the #bae'},
		
	];
});

