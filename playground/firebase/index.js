import firebase from "firebase";

var config = {
	apiKey: "AIzaSyAuVntKHiWyDOSuPdxd546nMFFEURrI2X8",
	authDomain: "shirokov-todo-app.firebaseapp.com",
	databaseURL: "https://shirokov-todo-app.firebaseio.com",
	storageBucket: "shirokov-todo-app.appspot.com",
	messagingSenderId: "55371203600"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: "To study",
		version: "1.0.0"
	},
	isRunning: true,
	user: {
		name: "Sasha",
		age: 38
	}
});

// var notesRef = firebaseRef.child("notes");
//
// notesRef.on("child_added", (snapshot) => {
// 	console.log("child_added", snapshot.key, snapshot.val());
// });
// notesRef.on("child_changed", (snapshot) => {
// 	console.log("child_changed", snapshot.key, snapshot.val());
// });
// notesRef.on("child_removed", (snapshot) => {
// 	console.log("child_removed", snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
// 	text: "Walk the dog!!!!!!!!!!!!"
// });
// console.log("Todo id", newNoteRef.key);

var todosRef = firebaseRef.child("todos");
todosRef.on("child_added", (snapshot) => {
	console.log("child_added", snapshot.key, snapshot.val());
});
todosRef.push({
	text: "Cook some food"
});
todosRef.push({
	text: "Eat the luch"
});


// firebaseRef.child("user").on("value", (snapshot) => {
// 	console.log("User ref changed", snapshot.val());
// });
//
// firebaseRef.child("user").update({
// 	name: "Misha"
// });
// firebaseRef.child("app").update({
// 	name: "Application"
// });
