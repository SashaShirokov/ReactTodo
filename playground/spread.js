// function add(a, b) {
// 	return a + b;
// }
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ["Jen", "Cory"];
// var groupB = ["Sasha"];
// var final = [...groupB, 3, ...groupA];
// console.log(final);

var person = ["Sasha", 38];
var personTwo = ["Sveta", 40];

function greet(name, age) {
	console.log("Hi " + name + " you are " + age);
}
greet(...person);
greet(...personTwo);

// var array = [greet(...person), greet(...personTwo)]
// console.log(array);

var names = ["Mike", "Ben"];
var final = ["Sasha", ...names];
// for (i = 0; final.length < 3; i ++) {
// 	console.log("Hi " + i);
// }
final.forEach(function (name) {
	console.log("Hi " + name);
});
