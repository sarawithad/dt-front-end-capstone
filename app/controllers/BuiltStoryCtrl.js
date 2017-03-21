"use strict";
console.log("controller connected");

app.controller("StoryCtrl", function($scope, $location, StoryFactory, $window, BookshelfFactory, AuthFactory){

	let user = AuthFactory.getUser();

	var component = StoryFactory.getStoryObject();

	// $scope.stories = "story";

	$scope.storyComponents = component;

	//builds story title using chosen main and second characters
	$scope.title = `the ${$scope.storyComponents.chosenMainCharacter} and the ${$scope.storyComponents.chosenSecondCharacter}`;
	
	//builds story with user's chosen story components
	$scope.finalStory = `Once upon a time, there was a ${$scope.storyComponents.chosenMainCharacter} who lived at a ${$scope.storyComponents.chosenPlace}. The ${$scope.storyComponents.chosenMainCharacter}’s best friend was a famous ${$scope.storyComponents.chosenSecondCharacter}. The two became best friends after the ${$scope.storyComponents.chosenSecondCharacter} helped the ${$scope.storyComponents.chosenMainCharacter} defeat the evil villain ${$scope.storyComponents.chosenVillain}, and save the ${$scope.storyComponents.chosenPlace}. The ${$scope.storyComponents.chosenMainCharacter} and ${$scope.storyComponents.chosenSecondCharacter} went everywhere together. They always traveled by way of the ${$scope.storyComponents.chosenMainCharacter}'s ${$scope.storyComponents.chosenTransport}. They especially loved to play all around the ${$scope.storyComponents.chosenPlace} with ${$scope.storyComponents.chosenItem}s and have ${$scope.storyComponents.chosenFood} feasts. The ${$scope.storyComponents.chosenMainCharacter} and the ${$scope.storyComponents.chosenSecondCharacter} were friends forever. The end.`;


	console.log("finalStory", $scope.finalStory);

		// place = {{storyComponents.chosenPlace}}
		// main character = {{storyComponents.chosenMainCharacter}}
		// second character = {{storyComponents.chosenSecondCharacter}}
		// transportation = {{storyComponents.chosenTransport}}
		// item = {{storyComponents.chosenItem}}
		// food = {{storyComponents.chosenFood}}	
		// villain = {{storyComponents.chosenVillain}}


	//putting on scope makes these available to pass in
	$scope.storyComponents.finalStory = $scope.finalStory;
	$scope.storyComponents.title = $scope.title;
	$scope.storyComponents.uid = user;
	$scope.storyComponents.id = $scope.storyId;
	// $scope.setStories

	//reads user-built story aloud on click of "read my story" button
	$scope.speak = function(item){
	   console.log("you are now using responsive voice");
	   responsiveVoice.speak($scope.finalStory,  "UK English Female");
	};


	//saves user-built story----

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//does this need to go on BookshelfCtrl?? Can it be called from here (w/ putOnBookshelf) if on a diff controller?
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	$scope.saveStory = function(storyObject){
		// $scope.stories = "story";
		BookshelfFactory.addNewStory(storyObject)
		.then(function(response){
			$scope.setStories();
			// BookshelfFactory.getSavedStories(user)
			// .then(function(allStories){
			// 	$scope.stories = allStories;
			// 	console.log("allStories: ", allStories);
			// });
		});
		// $location.url("storytime/mybookshelf");
	};

	//calls saveStory function on click of "save story" button (ng-click)
	$scope.putOnBookshelf = function(){
		$scope.saveStory($scope.storyComponents);
	};


});




//window.speechSynthesis--this works but not with voice I want

// $scope.readStoryAloud = function() {
// 	console.log("you are now using speechSynthesis");
//     var msg = new $window.SpeechSynthesisUtterance($scope.finalStory,  "UK English Female");
//     // var voice = $window.speechSynthesis.getVoices();
//     // msg.voice = voice[3];
//     $window.speechSynthesis.getVoices();
  
//     $window.speechSynthesis.speak(msg);
// };





