"use strict";

var app = angular.module("StoryApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
   when("/", {
      templateUrl: "partials/homepage.html",
      controller: "HomepageCtrl"
    }).
   when("/storytime", {
      templateUrl: "partials/homepage.html",
      controller: "HomepageCtrl"
    }).
    when("/storytime/login", {
      templateUrl: "partials/login.html",
      controller: "UserCtrl"
    }).
    when("/storytime/logout", {
      templateUrl: "partials/login.html",
      controller: "UserCtrl"
    }).
    when("/storytime/storybuilder/chooseplace", {
      templateUrl: "partials/choose-place.html",
      controller: "ChoosePlaceCtrl"
    }).
    when("/storytime/storybuilder/choosemaincharacter", {
      templateUrl: "partials/choose-main-char.html",
      controller: "ChooseMainCharCtrl"
    }).
		when("/storytime/storybuilder/choosesecondcharacter", {
      templateUrl: "partials/choose-sec-char.html",
      controller: "ChooseSecCharCtrl"
    }).
		when("/storytime/storybuilder/choosetransport", {
      templateUrl: "partials/choose-transport.html",
      controller: "ChooseTransportCtrl"
    }).
       when("/storytime/storybuilder/chooseitem", {
      templateUrl: "partials/choose-item.html",
      controller: "ChooseItemCtrl"
    }).
		when("/storytime/storybuilder/choosefood", {
      templateUrl: "partials/choose-food.html",
      controller: "ChooseFoodCtrl"
    }).
		when("/storytime/storybuilder/choosevillain", {
      templateUrl: "partials/choose-villain.html",
      controller: "ChooseVillainCtrl"
    }).
		when("/storytime/storybuilder/builtstory", {
      templateUrl: "partials/built-story.html",
      controller: "StoryCtrl"
    }).
		when("/storytime/mybookshelf", {
      templateUrl: "partials/mybookshelf.html",
      controller: "MyBookshelfCtrl",
    }).
    when("/storytime/mybookshelf/:storyId", { //not sure correct
      templateUrl: "partials/one-story.html",
      controller: "OneStoryCtrl"
    }). 
    when("/storytime/mybookshelf/:storyId/edit", { //not sure correct
      templateUrl: "partials/edit-story.html",
      controller: "EditStoryCtrl"
    }).       
    // when("storytime/randomstorybuilder/choices", {
    //   templateUrl: "partials/random-story.html",
    //   controller: "RandomStoryCtrl"
    // }).
  otherwise('/');
});


app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});


