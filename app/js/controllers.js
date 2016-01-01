//controller jsvar app = angular.app('InstaCatalogApp',[]);

var app=angular.module('InstaCatalogApp',['ngResource']);

var payload = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=255983170.310dbae.f6f38f0ee1e4446c92734dc6fa2faead&callback=JSON_CALLBACK';

//declared controller and registered it in AngularJS module
app.controller('InstagramListCtrl',function($scope,$http){
	
	//$scope.pics=[
	//	{'name':'Pic 1',
	//	'description':'Me and the new #Whip'},
	//	{'name':'Pic 2',
	//	'description':'Pic with the #bae'},
	//
	//];

	$scope.pics=[];
	$http.jsonp(payload).success(function(data) {
		console.log(data.data);

		console.log(data.data[0]);
		$scope.pics = data.data;
	});

});

