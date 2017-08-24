///******Call and Apply 
//**warning this is only meant as an introduction and only covers a few examples as I understand them




//Call and Apply might as well be the exact same thing with 1 difference:
//Call accepts an argument list
//Apply accepts an array of arguments


//What Call and Apply do:
//They both call a function, where we give the function a specific "this" to reference


var type = "angry"; //global


var person = {
    type: "happy",
    sayGreeting: function(greeting) {
        console.log(greeting + ", I am very " + this.type);
    }
}

person.sayGreeting("Hello"); //output: "hello, I am very happy"

//the syntax for call is:
//function.call(thisArg, arg1, arg2, ...)

//so...

person.sayGreeting.call(window, "Goodbye"); //output: "Goodbye, I am very angry" 
//NOTE: instead of window, you could use 'null' since null will default to the global scope
person.sayGreeting.call(null, "Goodbye"); //output: "Goodbye, I am very angry"

//or

person.sayGreeting.call({ type: "sad" }, "Welcome"); //output: "Welcome, I am very sad"
//here I am passing a new object, so when sayGreeting is called 'this' is this new object, and this.type is in reference to the object I'm passing in



//the syntax for apply is:
//function.apply(thisArg, [arg1, arg2, ...])

//so...

person.sayGreeting.apply(null, ["Goodbye"]) //output: "Goodbye, I am very angry"




//can you give me a thing that apply can do?

//sure

//Math.max() is a built in function that gives us the highest number of a given set of numbers (NOT an array!)

Math.max(1, 5, 18, 2, 5, 102) //output: 102

//what if we have an array of numbers? and maybe this array changes from time to time...
var numberList = [1, 5, 18, 2, 5, 102]

Math.max(numberList) //output: NaN aka Not a Number aka  I'm not going to work

Math.max.apply(null, numberList); //output: 102

//shutup Dzmitry...ok ok, in ES6 it's even easier

Math.max(...numberList); //output: 102
//^^ this is called a spread operator, check for browser support



//can you give me a thing that call can do?

//well Arrays have methods that Objects do not have

//so if we are dealing with an object that is "array-like" we can perform array methods on that object
//note this example would have been better written as an array, so this is a contrived example to illustrate that you could "steal" an array method on an object

var students = {
    0: "David",
    1: "Dzmitry",
    2: "Matt",
    3: "Jarrett",
    length: 4
}

var newStudent = "Patrick"

students.push(newstudent) //output: students.push is not a function
    //students is not an array, so we can't use an array method....because it's not an array

Array.prototype.push.call(students, newStudent);

console.log(students)
    /*output:

    var students = {
        0: "David",
        1: "Dzmitry",
        2: "Matt",
        3: "Jarrett",
        4: "Patrick"
        length: 5
    }

    Look at that! it even updated our length property, weird!
    */



//additional resources
//http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply