"use strict";

app.factory("BookshelfFactory", ($q, $http, FBCreds) => { 

//function for adding a user story to bookshelf
	let addNewStory = (finalStory) => {
        console.log("hello from inside addNewStory function", finalStory);
        return $q((resolve, reject) => {
            $http.post(`${FBCreds.databaseURL}/stories.json`,
                angular.toJson(finalStory))
            .then((ObjectFromFirebase) => {
                resolve(ObjectFromFirebase);
            })
            .catch ((error) => {
                reject(error);
            });
        });
    };


// function for getting user's saved stories
    let getSavedStories = (user) => {
        console.log("user", user);
        let stories = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/stories.json?orderBy="uid"&equalTo="${user}"`)
            .then((storyObject) => {
                let storyCollection = storyObject.data;
                Object.keys(storyCollection).forEach((key) => {
                    storyCollection[key].id = key;
                    stories.push(storyCollection[key]);
                });
                console.log("stories: ", stories);
                resolve(stories);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };



    return {addNewStory, getSavedStories};

});

