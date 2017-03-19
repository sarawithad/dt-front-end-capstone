"use strict";
console.log("controller connected");

app.controller("StoryBuilderCtrl", function($scope, StoryFactory, $window){
	console.log("hi");

	$scope.title = "my story";

	var component = StoryFactory.getStoryObject();

	$scope.storyComponents = component;
	console.log("scope.StoryComponents: ", $scope.StoryComponents);

		$scope.finalStory = `There was a ${$scope.storyComponents.chosenMainCharacter} who lived at a ${$scope.storyComponents.chosenPlace}. The ${$scope.storyComponents.chosenMainCharacter}’s best friend was a ${$scope.storyComponents.chosenSecondCharacter}. The two became best friends after the ${$scope.storyComponents.chosenSecondCharacter} helped the ${$scope.storyComponents.chosenMainCharacter} defeat the evil villain, ${$scope.storyComponents.chosenVillain}. The ${$scope.storyComponents.chosenMainCharacter} and ${$scope.storyComponents.chosenSecondCharacter} went everywhere together in the ${$scope.storyComponents.chosenMainCharacter}'s ${$scope.storyComponents.chosenTransport}. They especially loved to play with ${$scope.storyComponents.chosenItem}s and have ${$scope.storyComponents.chosenFood} feasts.`;

console.log("finalStory", $scope.finalStory);

$scope.getFinalStory = function() {
	return $scope.finalStory;
};

$scope.readStoryAloud = function() {
	console.log("you clicked on the reader button");
	let finalStory;
    msg = new $window.SpeechSynthesisUtterance(finalStory);
    $window.speechSynthesis.speak(msg);
};



	// $scope.responsiveVoice = responsiveVoice;

	// $scope.responsiveVoice.speak = function() {
	// 	responsiveVoice.speak();
	// }

// 'responsiveVoice.speak("finalStory")'
});








