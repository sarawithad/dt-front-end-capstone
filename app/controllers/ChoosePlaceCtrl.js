"use strict";

app.controller("ChoosePlaceCtrl", function($scope, StoryFactory, $location){

	$scope.title = "choose a setting for your story:";

		$scope.addPlace = function(place){
			var newPlace = {chosenPlace: place};
			StoryFactory.setStoryObject(newPlace);

		$location.url("storytime/storybuilder/choosemaincharacter");

		};





});