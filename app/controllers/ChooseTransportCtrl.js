"use strict";

app.controller("ChooseTransportCtrl", function($scope, StoryFactory, $location){

	$scope.title = "choose your transportation method:";

		$scope.addTransport = function(transport){
			var newTransportation = {chosenTransport: transport};
			console.log("newTransportation: ", newTransportation);
			StoryFactory.setStoryObject(newTransportation);

		$location.url("storytime/storybuilder/chooseitem");
		};

});

