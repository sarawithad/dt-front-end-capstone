"use strict";
console.log("StoryCtrl connected");

app.controller("StoryCtrl", function($scope, $location, StoryFactory, $window, BookshelfFactory, AuthFactory, OneStoryFactory){

	let user = AuthFactory.getUser();

	var component = StoryFactory.getStoryObject();

	$scope.storyComponents = component;

	//builds story title using chosen main and second characters
	$scope.title = `the ${$scope.storyComponents.chosenMainCharacter} and the ${$scope.storyComponents.chosenSecondCharacter}`;

	$scope.storyBegin = `Once Upon a Time,`;
	
	//builds story with user's chosen story components
	$scope.storyBody = `there was a ${$scope.storyComponents.chosenMainCharacter} who lived in a ${$scope.storyComponents.chosenPlace}. The ${$scope.storyComponents.chosenMainCharacter}’s best friend was a famous ${$scope.storyComponents.chosenSecondCharacter}. The two became best friends after the ${$scope.storyComponents.chosenSecondCharacter} helped the ${$scope.storyComponents.chosenMainCharacter} defeat the evil villain ${$scope.storyComponents.chosenVillain}, and save the ${$scope.storyComponents.chosenPlace}. The ${$scope.storyComponents.chosenMainCharacter} and ${$scope.storyComponents.chosenSecondCharacter} went everywhere together. They always traveled by way of the ${$scope.storyComponents.chosenMainCharacter}'s ${$scope.storyComponents.chosenTransport}. They especially loved to play all around the ${$scope.storyComponents.chosenPlace} with ${$scope.storyComponents.chosenItem}s and have ${$scope.storyComponents.chosenFood} feasts. The ${$scope.storyComponents.chosenMainCharacter} and the ${$scope.storyComponents.chosenSecondCharacter} were friends forever.`;

	$scope.storyEnd = `The End.`;

	console.log("storyBody", $scope.storyBody);

	//putting on scope sets on object and makes these available to pass in
	$scope.storyComponents.finalStory = $scope.storyBody;
	$scope.storyComponents.title = $scope.title;
	$scope.storyComponents.uid = user;
	$scope.storyComponents.id = $scope.storyId;
	$scope.wholeStory = $scope.storyBegin + $scope.storyBody + $scope.storyEnd;

	//reads user-built story aloud on click of "read my story" button
	$scope.speak = function(){
	   responsiveVoice.speak($scope.wholeStory,  "UK English Female");
	};


	//saves user-built story
	function saveStory(storyObject){
		console.log("storyObject: ", storyObject);
		BookshelfFactory.addNewStory(storyObject)
		.then(function(response){
			$location.url("storytime/mybookshelf");
		});
	};

	//calls saveStory function on click of "save story"--if want to save story but not logged in, re-directs to login page
	$scope.putOnBookshelf = function(){ 
		if (user != null) {
			saveStory($scope.storyComponents);
		}else{
			$window.location.href = "#!/storytime/login";
		};

	};

});




