"use strict";

app.controller("MyBookshelfCtrl", function($scope, StoryFactory, BookshelfFactory, $location, AuthFactory){

	$scope.title = "my bookshelf";

	let user = AuthFactory.getUser();

	//gets stories that user has saved to their bookshelf
	$scope.setStories = function(){
		BookshelfFactory.getSavedStories(user)
			.then(function(allStories){
				$scope.stories = allStories;
				console.log("allStories: ", allStories);
			});
			$location.url("storytime/mybookshelf");
	};

});







