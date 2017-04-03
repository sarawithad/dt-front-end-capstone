"use strict";

app.controller("ChooseVillainCtrl", function($scope, StoryFactory, $location){

	$scope.title = "choose your villain:";

		$scope.addVillain = function(villain){
			var newVillain = {chosenVillain: villain};
			StoryFactory.setStoryObject(newVillain);

		$location.url("storytime/storybuilder/builtstory");
		};



});


