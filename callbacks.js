//*** Javascript Callbacks**

//**WARNING I'm going to make sure you understand passing arguments/parameters before you even see a callback */

//I've attempted to create a flow of examples that sort of get your mind wrapped around certain ideas
//these may not all be practical examples, but they illustrate certain concepts
//attempting to run this code in node will likely cause errors, try recreating some of these on your own

//take your time to understand the output of each one, don't move on to the next example until you understand the previous
//it may take you 30 minutes, or 3 weeks to work them out in your head - learning is on your time and at your pace.



//a function and a function call

function sayHello() {
    console.log("hello");
}

sayHello(); //output: "hello"































//a function with a parameter and a function call

function sayHello(message) {
    console.log(message);
}

sayHello("hello"); //output: "hello"




























//a function with 2 parameters and a function call

function sayHello(message, name) {
    console.log(message + " " + name);
}

sayHello("hello", "David"); //output: "hello David"







































//a function with 2 parameters that are passed in from variables and a function call

var message = "hello";
var name = "David";

function sayHello(messageStr, nameStr) {
    console.log(messageStr + " " + nameStr);
}

sayHello(message, name); //output: "hello David"

//remember we can call our parameters whatever we want

var message = "hello";
var name = "David";

function sayHello(poop, bread) {
    console.log(poop + " " + bread);
}

sayHello(message, name); //output: "hello David"



//lets break this one down:


var message = "hello"; //assign a value to a variable named message
var name = "David"; //assign a value to a variable named name

function sayHello(poop, bread) { //declare a function with 2 parameters, these are just placeholders for what gets passed in later, remember we aren't calling the function yet, just creating it.

    console.log(poop + " " + bread); //so now whatever was passed in as poop, gets called anytime we say poop
    console.log(poop + " " + poop + " " + poop + " " + poop) //I can use it as many times as I want, and poop will always refer to the value that was passed in
}

sayHello(message, name); ///now we're actually calling the function, the position we pass our values in matters! so now in our function, poop REALLY means message which REALLY means "hello". Trace it back!
//output: "hello David"
//output: "hello hello hello hello"

//just to drive it home, let's do the EXACT same thing, except this time we are going to reverse the parameters we pass:

var message = "hello";
var name = "David";

function sayHello(poop, bread) {
    console.log(poop + " " + bread);
    console.log(poop + " " + poop + " " + poop + " " + poop)
}

sayHello(name, message); //now when we pass in our arguments in reverse, our output changes...make you understand why
//output: "David hello"
//output: "David David David David"


//moving on...















































//a function with 1 parameter that is passed an object and a function call

var data = {
    message: "hello",
    name: "David"
}

function sayHello(message, name) {
    console.log(message + " " + name);
}

sayHello(data.message, data.name); //output: "hello David"




//a rewrite of the above function to accept 1 parameter, where we will pass an object and a function call

var data = {
    message: "hello",
    name: "David"
}

function sayHello(dataObj) {
    console.log(dataObj.message + " " + dataObj.name);
}

sayHello(data);  //output: "hello David"










































//so we can pass strings, and numbers, and objects, and booleans into a function.... can you pass functions????


YESS!!!!!


//declaring a function then passing that function as a parameter to a different function and then calling the function

function sayHello() {
    console.log("hello");
}

function runParam(cb) {
    cb();
}

runParam(sayHello); //output: "hello"

//notice we just pass just the function sayHello, we don't call it by passing it "sayHello()" Why do you thnk that is?




//another way to write the above example

var sayHello = function () { //this is a different way to declare a function, but it may better instill the concept of JUST passsing the function, but not calling it
    console.log("hello");
}

function runParam(cb) {
    cb();
}

runParam(sayHello); //output: "hello"
































//declaring a function and passing 2 parameters, 1 is a function, 1 is a string. Yes, console.log() is a function

function runParam(cb, message) {
    cb(message);
}

runParam(console.log, "hello"); //output: "hello"





































//declaring a function and passing 3 parameters, 1 is a function, 2 are strings

function runParam(cb, message, name) {
    cb(message + " " + name);
}

runParam(console.log, "hello", "David"); //output: "hello David"































//declaring a function and passing 1 object that has 3 properties, 2 which are strings, 1 which is a function

var data = {
    message: "hello",
    name: "David",
    cb: function (string1, string2) {
        console.log(string1 + " " + string2);
    }
}

function runParam(dataObj) {
    dataObj.cb(dataObj.message, dataObj.name);
}

runParam(data); //output: "hello David"

///kill me






















//in review

function beAFunction() {
    //do nothing
}

function sayThing(thing) {
    console.log(thing);
}


sayThing(3); //output 3
sayThing("hello"); //output "hello"
sayThing(true); //output true;
sayThing({ name: "David" }); //output {name: "David"};
sayThing(beAFunction); //output function(){}















//so great, I can do your examples, what is a callback?

/*A callback function,
 is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter,
  and the callback function is called (or executed) inside the otherFunction. */





//so what are some functions that use callbacks that we already know?


//setTimeout() is a built in function that takes 2 parameters
//setTimeout(cb, delay) //takes a callback and a delay//
// if we were to look at this function it might look something like this (for illustration only!)

function setTimeout(cb, delay) {
    //wait the delay in ms *I'm writing pseudocode here in place of real code
    //when finished, run callback
    cb()
}


//working example, in this example sayHello is the callback, and 1000 is the delay
function sayHello() {
    console.log("hello");
}
setTimeout(sayHello, 1000); //wait the given delay then : //Output: "hello"



//here's another callback you've seen

$("#someId").on("click", function () {
    alert("you clicked me!");
});

//hold on how is that a callback?!?!

//.on() is just a function or really a method on the jQuery object
//a function where we are passing it 2 parameters so:
//.on(action, cb);

// if we were to look at this function it might look something like this (for illustration only!);

$ = { //jQuery object
    name: "hey I'm jquery and this is just a value on a property that lives in an object",
    on: function (action, cb) { //another property that has a function, or you can call it a method
        //waits for browser to fire off an event that matches our action then...  *I'm writing pseudocode here in place of real code
        cb(); //runs our callback

    }
}

//so in this example:
$("#someId").on("click", function () {
    alert("you clicked me!");
});
//our callback is this unnamed function that is getting passed in, and our action is "click"



//but wait you can just pass in the whole damn function? you don't even have to declare it first with a name?

function sayHelloThenRunCallback(message, cb) {
    console.log(messsage);
    cb()
}


//hell yeah we can;

sayHelloThenRunCallback("hello", function () {
    alert("let's do it live!");
}) //Output: "hello" then it will alert "let's do it live!";"

//this type of function is an "anonymous" function




//Additional resource: https://www.impressivewebs.com/callback-functions-javascript/
//Additional resource: http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
