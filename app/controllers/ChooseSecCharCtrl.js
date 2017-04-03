"use strict";

app.controller("ChooseSecCharCtrl", function($scope, StoryFactory, $location){

	$scope.title = "choose another character:";

		$scope.addSecCharacter = function(secondcharacter){
			var newSecondCharacter = {chosenSecondCharacter: secondcharacter};
			StoryFactory.setStoryObject(newSecondCharacter);

		$location.url("storytime/storybuilder/choosetransport");
		};


});

