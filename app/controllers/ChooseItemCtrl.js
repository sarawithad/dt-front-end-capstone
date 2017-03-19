"use strict";

app.controller("ChooseItemCtrl", function($scope, StoryFactory, $location){

	$scope.title = "choose an item:";

		$scope.addItem = function(item){
			var newItem = {chosenItem: item};
			console.log("newItem: ", item);
			StoryFactory.setStoryObject(newItem);

			$location.url("storytime/storybuilder/choosefood");
		};

});
