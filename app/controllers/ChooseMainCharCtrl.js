"use strict";

app.controller("ChooseMainCharCtrl", function($scope, StoryFactory, $location){

	$scope.title = "choose your main character:";

		$scope.addMainCharacter = function(maincharacter){
			var newMainCharacter = {chosenMainCharacter: maincharacter};
			StoryFactory.setStoryObject(newMainCharacter);

		$location.url("storytime/storybuilder/choosesecondcharacter");
	};





});

