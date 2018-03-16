// ES6 Syntax


///// Template literal

{
    var firstNumber = 2;
    var secondNumber = 4;

    // before
    var a = "My number is " + firstNumber; // My number is 2

    var b = "I can add to get the total of " + (firstNumber + secondNumber); // I can add to get the total of 6

    // ES6 (note backticks ``)
    var A = `My number is ${firstNumber}` // My number is 2

    var B = `I can add to get the total of ${firstNumber + secondNumber}`; // I can add to get the total of 6    
}


{
    function addNumbers(num1, num2){
        return num1 + num2;
    }
    // before
    var c = "I can use a function to get the total of " + addNumbers(8, 1); // I can use a function to get the total of 9

    // ES6
    var C = `I can use a function to get the total of ${addNumbers(8, 1)}`; // I can use a function to get the total of 9
    
}


{
    // before
    var d = "I can use a function to get the total of " + addNumbers(8, 1); // I can use a function to get the total of 9

    // ES6
    var D = `I can use a function to get the total of ${addNumbers(8, 1)}`; // I can use a function to get the total of 9    
}


{
    // before
    var e = "When I type" +
            "these line breaks" +
            "don't matter" +
            "but spaces                     in the string matter";
    // "When I typethese line breaksdon't matterbut spaces                     in the string matter"

    //ES6
    var E = `When I type
             these line breaks and indentions
             matter
             and so do                    spaces`
        /* "When I type
             these line breaks and indentions
             matter
             and so do                    spaces" */
}

// why? Readability, you write it just like you would typically write text WYSIWYG
// gotcha's- indention is in the output when it is probably not desired





///// Arrow Functions

{
    // Before
    function example(firstParam){
        return "this works";
    }
    // same as 
    var example = function(firstParam) {
        return "this works";
    }
    
    // ES6 (remove word "function", add arrow syntax =>)
    var example = (firstParam) => {
        return "this works";
    }
    // same as
    // cont... if only one parameter then parenthesis are not required
    var example = firstParam => {
        return "this works";
    }
    // same as
    // cont... if only one statement then curly braces and line break and "return" are not required, (return is implied);
    var example = firstParam => "this works";
}


{ // no param
    // before
   function example(){
       return "this works";
   }
   // same as 
   var example = function() {
       return "this works";
   }

   // ES6
   var example = () => {
       return "this works";
   }

   // cont...
   var example = () => "this works";
}


{ // multiple params
    // before
   function example(param1, param2){
       return "this works";
   }
   // same as 
   var example = function(param1, param2) {
       return "this works";
   }

   // ES6
   var example = (param1, param2) => {
       return "this works";
   }

   // cont...
   var example = (param1, param2) => "this works";
}

// why? faster to type, arrow function does NOT create its own 'this'- instead it uses the surrounding function context
// gotcha's - 'this' behaves differently, no 'arguments', can not bind an arrow function to a different object


///// let
{
    // before
    var dog = "fido";

    // ES6
    let dog = "fido";
}

{
    // before (only scoped in functions)
    if(2 === 2){
        var dog = "fido";
    }
    console.log(dog); //"fido"

    // ES6, block scope (curly braces create a new scope)
    if(2 === 2){
        var cat = "garfield";
    }
    console.log(cat); // undefined
}

{
    //before
    for(var i = 1; i <= 10; i++){
        setTimeout(function(){
            console.log(i);
        }, 1000);
    }
    // 11 11 11 11 11 11 11 11 11 11


    //before, fix our problem by giving the "i" variable function scope
    for(var i = 1; i <= 10; i++){
        runTimeout(i);
    }

    function runTimeout(i){
        setTimeout(function(){
            console.log(i);
        },1000);
    }
    // 1 2 3 4 5 6 7 8 9 10

    //before, same fix but with Immediately Invoked Function Expression (IIFE) aka "define a function and call it in one step"
    for(var i = 1; i <= 10; i++){
        (function(i){
            setTimeout(function(){
                console.log(i);
            },1000)
        })(i);
    }
    // 1 2 3 4 5 6 7 8 9 10

    // ES6
    for(let i = 1; i <= 10; i++){
        setTimeout(function(){
            console.log(i);
        },1000);
    }

    //1 2 3 4 5 6 7 8 9 10
}

// why? variables are now scoped within any set of curly braces (functions, conditionals, loops, etc) instead of just within functions. Many programming languages already utilize block scope
// gotcha's - "let" scope behavior is different than "var" scope behavior


///// const
if(2 === 2){
    const win = true;
}
console.log(win) //undefined
// has block scope 

const cat = "garfield";
cat = "Felix" //error cat is read only

// object and array contents CAN be changed
const person = {
    name: "David",
    age: 31
}
person.name = "Mirsada" //works

const numbers = [1, 2, 3, 4, 5];
numbers.push(6); //works



// Object literal (sweet!)

// ES5

var name = "David";
var age = 31;
var city = "Charlotte";

var person = {
    name: name,
    age: age,
    city: city
}

// ES6

const name = "David";
const age = 31;
const city = "Charlotte";

const person = {name, age, city};

console.log(person); // {"name":"David","age":31,"city":"Charlotte"}

// can write functions inline now

// ES5

var person = {
    sayHello : function(){
        console.log("hello");
    }
}
person.sayHello();

// ES6

const person = {
    sayHello(){
        console.log("hello");
    }
}
person.sayHello();

// Destructuring - array

// ES5

var product = ["television", 2000.99];
var productName = product[0];
var productPrice = product[1]; 
console.log(productName); // "television"
console.log(productPrice); // 2000.99

// ES6

const product = ["television", 2000.99];
const [productName, productPrice] = product;
console.log(productName); // "television"
console.log(productPrice); // 2000.99

// lead with commands
// old
const numbers = [1, 2, 3, 4, 5];
var second = numbers[1];
// new
const [,second] = numbers; // gross!

//nested array
const names = [["David", "Kanwisher"], ["Mirsada", "Haticic"], 1 ];
const [[myFirstName, myLastName], [herFirstName, herLastName], randomNum] = names;
console.log(myFirstName) // "David"
console.log(randomNum) // 1

//Destructuring strings (similar)
let [firstLetter, , , , fifthLetter] = "Javascript";
console.log(firstLetter); // J
console.log(fifthLetter); // s
