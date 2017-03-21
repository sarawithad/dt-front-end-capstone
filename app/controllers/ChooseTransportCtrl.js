"use strict";

app.controller("ChooseTransportCtrl", function($scope, StoryFactory, $location){

	$scope.title = "choose how you want to travel:";

		$scope.addTransport = function(transport){
			var newTransportation = {chosenTransport: transport};
			console.log("newTransportation: ", newTransportation);
			StoryFactory.setStoryObject(newTransportation);

		$location.url("storytime/storybuilder/chooseitem");
		};

});

