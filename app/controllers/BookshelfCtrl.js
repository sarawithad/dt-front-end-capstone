"use strict";

app.controller("MyBookshelfCtrl", function($scope, StoryFactory, BookshelfFactory, $location, AuthFactory){

	$scope.title = "my bookshelf";

	let user = AuthFactory.getUser();

	// var component = StoryFactory.getStoryObject();
	// saveStory(component);

	// let saveStory = function(storyObject){
	// 	console.log("hello from inside saveStory function");
	// 	BookshelfFactory.addNewStory(storyObject)
	// 	.then(function(response){
	// 		$location.url("storytime/mybookshelf");
	// 	});
	// };



	//gets stories that user has saved to their bookshelf--want to happen on page load (ng-init??)
	$scope.setStories = function(){
		BookshelfFactory.getSavedStories(user)
			.then(function(allStories){
				$scope.stories = allStories;
				console.log("allStories: ", allStories);
			});
			$location.url("storytime/mybookshelf");
	};

});







