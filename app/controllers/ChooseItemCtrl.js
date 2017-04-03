"use strict";

app.controller("ChooseItemCtrl", function($scope, StoryFactory, $location){

	$scope.title = "choose your favorite thing:";

		$scope.addItem = function(item){
			var newItem = {chosenItem: item};
			StoryFactory.setStoryObject(newItem);

			$location.url("storytime/storybuilder/choosefood");
		};

});
