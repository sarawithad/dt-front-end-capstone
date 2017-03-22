"use strict";

app.controller("OneStoryCtrl", function($scope, $routeParams, StoryFactory, OneStoryFactory, BookshelfFactory, $location, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.finalStory = {};
	$scope.title = {};


	//reads user-built story aloud on click of "read my story" button
	$scope.readSelectedStory = function(item){
	   console.log("you are now using responsive voice");
	   responsiveVoice.speak($scope.finalStory,  "UK English Female");
	};


	//function to load selected saved story
	// $scope.getOneStory = function(storyId) {
	// 	console.log("hello from inside getOneStory");
	// 	OneStoryFactory.getSingleStory($routeParams.storyId)
	// 	.then( (story) => {
	// 		$scope.finalStory = story.finalStory;
	// 	});
	// };

	OneStoryFactory.getSingleStory($routeParams.storyId)
		.then(function successCallback(response){
			console.log("getSingleStoryresponse: ", response);
			$scope.finalStory = response.finalStory;
			$scope.title = response.title;	
		});


	//function to edit selected saved story
	$scope.editOneStory = function(){
		console.log("hello from inside editOneStory");
		OneStoryFactory.editStory();
	};


	//function to delete selected saved story
	$scope.deleteOneStory = function(storyId){
		console.log("hello from inside deleteOneStory");
		OneStoryFactory.deleteStory($routeParams.storyId)
		.then(function(response){
			$location.url("storytime/mybookshelf");
		});
	};

});