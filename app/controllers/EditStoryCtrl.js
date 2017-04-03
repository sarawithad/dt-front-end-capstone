"use strict";

app.controller("EditStoryCtrl", function($scope, $routeParams, StoryFactory, OneStoryFactory, BookshelfFactory, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.story = {};
	$scope.newPlace = {};
	$scope.newMainCharacter =  {};
	$scope.newSecondCharacter = {};
	$scope.newTransportation = {};
	$scope.newItem = {};
	$scope.newFood = {};
	$scope.newVillain = {};

	//function to edit selected saved story
	$scope.editOneStory = function(){
		OneStoryFactory.editStory();
		// $scope.story = story;
	};


});