"use strict";

app.factory("OneStoryFactory", ($q, $http, FBCreds, BookshelfFactory) => { 

    let storyBegin = "Once Upon a Time";
    let storyEnd = "The End";

    //function for getting single user story on click of story title
    let getSingleStory = (storyId) => {
        return $q(function(resolve, reject){
            $http.get(`${FBCreds.databaseURL}/stories/${storyId}.json`)
            .then(function(storyObject){
                resolve(storyObject.data);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };



    // function for editing single user story on click of edit button

    let editStory = (storyId, editedStory) => {
        return $q(function (resolve, reject) {
            $http.patch(`${FBCreds.databaseURL}/stories/${storyId}.json`, angular.toJson(editedStory))
            .then(function(ObjectFromFirebase){
                resolve(ObjectFromFirebase);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };


    //function for deleting single user story on click of delete button

    let deleteStory = (storyId) => {
        return $q((resolve,reject) => {
            $http.delete(`${FBCreds.databaseURL}/stories/${storyId}.json`)
            .then ((ObjectFromFirebase) => {
                resolve(ObjectFromFirebase);
            });
        });
    };

	return {getSingleStory, deleteStory, editStory};
           


});
