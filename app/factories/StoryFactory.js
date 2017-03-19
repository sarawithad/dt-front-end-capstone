"use strict";

app.factory("StoryFactory", ($q, $http, FBCreds) => { 

	let storyObject = {};


	let setStoryObject = function(component){
        for (var prop in component){
        console.log(prop);
        storyObject[prop] = component[prop];
        }
        console.log("storyObject: ", storyObject);
    };    

    let getStoryObject = function(){
        return storyObject;
    };


	return {setStoryObject, getStoryObject};
           


});







