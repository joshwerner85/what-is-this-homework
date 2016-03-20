/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
	// this.name = 'Sally';
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. Run through each of the
// examples in whatIsThis.js, one by one (commenting out the previous example
// and uncomment the current example as necessary). In the comments section
// below each example fill in what `this` is referencing inside of the
// whatIsThis function. Why? If it throws an error, why is it throwing an
// error?

// You can open index.html in your browser and view your console to get
// started.

// // * Problem 1
// whatIsThis('hello', 'world');
// // * "this" is ... function
// // * because ... hello = a and world = b




// // * Problem 2
// window.whatIsThis('hello', 'world');
// // * "this" is ... function that is avaiable on the entrie window because of the window property
// // * because ... a = hello b = world




// // * Problem 3
// inAnObject.test1('face', 'book');
// // * "this" is ... Function inside of an Object
// // * because ... a = face and b = book 




// // * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
// // * "this" is ... not a function.  
// // * because ... there out of order inAnObject test1 and anotherObject is the order which is incorrect.



// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is ... function which
// * because ... a = twitter and b = book 




// * Problem 6
// whatIsThis.call();
// * "this" is ... function with undefined parameters
// * because ... a = undefined b = undefined




// * Problem 7
// whatIsThis.call(trickyTricky,);
// * "this" is .. function
// * because ... because it is inside of inAFunction 




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ... function
// * because ... a = nice and b = job




// * Problem 9
// whatIsThis.call(confusing);
// * "this" is ... function 
// * because ... a = undefined and b = undefined




// * Problem 10
// whatIsThis.call(confusing, 'hello');
// * "this" is ... function
// * because ... it's calling confusing as a parameter which is an object but it is undefined and the string hello is defined which is why it = a




// * Problem 11
// whatIsThis.apply(trickyTricky);
// * "this" is ... function
// * because ... trickyTricky is an object which they are calling as a parameter for the function whatIsThis.




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ... Object
// * because ... the function whatIsThis a = nice and b = job




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is ... function 
// * because ... nice and job aren't in [] the function is undefined




// * Problem 14
// inAFunction('what will', 'happen?');
// * "this" is ... function
// * because ... a = what will and b = happen from whatIsThis function




// * Problem 15
// inAFunction.test3('A', 'B');
// * "this" is ... function
// * because ... test3 is undefined




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ... function
// * because ... a = what will and b = happen




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
// * "this" is ... function
// * because ... a = what will b = happen inAFunction a = C and b = D




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ... function
// * because ... a = face and b = book




// * Problem 19
inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ... Object
// * because ... because inAnObject = Object and confusing passed in variables a = foo and b = bar






