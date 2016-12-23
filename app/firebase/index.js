import firebase from "firebase";

try {
	var config = {
		apiKey: "AIzaSyAuVntKHiWyDOSuPdxd546nMFFEURrI2X8",
		authDomain: "shirokov-todo-app.firebaseapp.com",
		databaseURL: "https://shirokov-todo-app.firebaseio.com",
		storageBucket: "shirokov-todo-app.appspot.com",
		messagingSenderId: "55371203600"
	};

	firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
