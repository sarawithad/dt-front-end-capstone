"use strict";

app.controller("ChooseFoodCtrl", function($scope, StoryFactory, $location){

	$scope.title = "choose your favorite food:";

		$scope.addFood = function(food){
			var newFood = {chosenFood: food};
			console.log("newFood: ", newFood);
			StoryFactory.setStoryObject(newFood);

		$location.url("storytime/storybuilder/choosevillain");

		};



});

