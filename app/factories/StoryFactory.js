"use strict";

app.factory("StoryFactory", ($q, $http, FBCreds) => { 

	let storyObject = {};

//sets new key/value pairs for every story component upon selection of image
	let setStoryObject = function(component){
        for (var prop in component){
        storyObject[prop] = component[prop];
        }
    };    

    let getStoryObject = function(){
        return storyObject;
    };


	return {setStoryObject, getStoryObject};
           

});







