"use strict";

app.controller("OneStoryCtrl", function($scope, $routeParams, StoryFactory, OneStoryFactory, BookshelfFactory, $location, AuthFactory){

	let user = AuthFactory.getUser();

	//function to load selected saved story
	$scope.getOneStory = function(storyId) {
		console.log("hello from inside getOneStory");
		OneStoryFactory.getSingleStory($routeParams.storyId);
	};

	// OneStoryFactory.getSingleStory($routeParams.storyId)
	// .then(function successCallback(response){
	// 	console.log("getSingleStoryresponse: ", response);

	// });


	//function to edit selected saved story
	$scope.editOneStory = function(){
		console.log("hello from inside editOneStory");
		OneStoryFactory.editStory();
	};


	//function to delete selected saved story
	$scope.deleteOneStory = function(){
		console.log("hello from inside deleteOneStory");
		OneStoryFactory.deleteStory();
	};

});