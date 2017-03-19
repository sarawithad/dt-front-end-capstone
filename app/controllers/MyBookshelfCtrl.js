"use strict";

app.controller("MyBookshelfCtrl", function($scope, StoryFactory){

$scope.title = "my bookshelf";




// function for getting saved stories

// function for editing saved stories





});



	// let getItemList = (user) => {
	// 	let items = [];
	// 	return $q((resolve, reject) => {
	// 		$http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
	// 		.then((itemObject) => {
	// 			let itemCollection = itemObject.data;
	// 			Object.keys(itemCollection).forEach((key) => {
	// 				itemCollection[key].id = key;
	// 				items.push(itemCollection[key]);
	// 			});
	// 			resolve(items);
	// 		})
	// 		.catch((error) => {
	// 			reject(error);
	// 		});
	// 	});
	// };



	// let updateItem = (itemId, editedItem) => {
	// 	return $q(function (resolve,reject){
	// 		$http.patch(`${FBCreds.databaseURL}/items/${itemId}.json`, angular.toJson(editedItem))
	// 		.then(function(ObjectFromFirebase){
	// 			resolve(ObjectFromFirebase);
	// 		})
	// 		.catch(function(error){
	// 			reject(error);
	// 		});
	// 	});
	// };

	// return {getItemList, updateItem};