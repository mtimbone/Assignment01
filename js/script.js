//STEP1

let someMonth;
function theMonth();
let currentMonth;
let summerMonth;
let myLibraryFunction;

//STEP2
//An example of:

//numberic literal expression

let mark = 10;

//string literal expression

let mark = "mark"

//boolean literal expression

let mark = true;

//a null liteal expression

let make = null;

//STEP3

//Two examples of complex / variable expressions;

let x = y + z;
let mark = m + ark;

let x = z;
let x = y;



//STEP4   Mark add Hungarian Notation

let strFirstName;
let strLastName;
let strAddress;
let strCity;
let iZipCode;
let iYourAge;
let strReferralSource;
let bMayWeContactYou;

//STEP5

//Take 3 of the 9 above and declare a variable by assigning a value

let fistName = ("mark");
let lastName = ("timbone")
let address = ("sanDiego")


//STEP6

//Create a variable.
//Add a number and a string and display the coerced result in the browser’s console window. 

let numStr = (17 + "str")
console.log(numStr);


//STEP7

7.	Create two variables.
For the first variable, add a Boolean and a string and display the coerced result.

let boolStr = (true + "str")
console.log(boolStr);

For the second variable, add a number and a Boolean and display the coerced result.

let numBool = (17 + true)
console.log(numBool);

or

true - 5
console.log


//STEP8


let someString = "who onse said, "Only two things are infinate, the universe and human stupidity, and I'm nos sure about the former."'
window.console.log.(someString);

//STEP9

//Create a variable that produces a null value in the console window.Then, create a variable that produces an undefined value in the console window.

let item;
console.log(item)

let some_item = null;
console.log(some_item)



//STEP10
1.	Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.


//STEP11

11.	Within an alert box, use the concatenation operator(+) to display text in the alert box that appears as follows:

Hello Zak Ruvalcaba, welcome to the JavaScript class!

    Substitute my name for your name.Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text.One after the text “Hello” and a second one after your name and before the comma.

let name = ("Hello Zak Ruvalcaba," + "welcome to the JavaScript class!");
alert(name);

let myName = ("Hello" + "Mark Timbone" + ", welcome to the JavaScript class!");
alert(myName);



//STEP12

1.	Declare a variable called name and set it equal to your name.
Substitute your name in the previous alert string with the variable instead.

let name = ("Mark Timbone");
let myName = ("Hello " + name + ", welcome to the JavaScript class!");
alert(myName);


//STEP13

1.	Declare a variable called course and set it equal to “JavaScript”.
Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

let course = ("JavaScript");
let myName = ("Hello, Mark Timbone, welcome to the" + course + " class!");
alert(myName);




//STEP14

14.	Rework the above string so that a line break is added right before the word “Welcome”.Your alert box should display as follows:

Hello Zak Ruvalcaba.
Welcome to the JavaScript class!

    let zak = ("Hello Zak Ruvalcaba. \nWelcome to the JavaScript class!");
alert(zak);

or

let zak = (`Hello Zak Ruvalcava.
Welcome to the JavaScript class!`);
alert(zak);





//STEP15


15.	Replace the hardcoded string of your name with a prompt that asks the user for their name.The prompt’s response will now be captured in the name variable.

let person = prompt('Enter your name');
alert(`Hello  ${person} Welcome to the JavaScript class!`);



//STEP16

//Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking.The prompt’s response will now be captured in the course variable.


let nameOfClass = prompt('Enter the name of your class');
alert(`Hello Mark Timbone. Welcome to the ${nameOfClass} class!`);





//STEP17

//17.	Declare a variable called x and assign it a value of 10.
//Declare a variable called y and assign it a value of 20.
//Display the sum of those two numbers in the console window. 

let x = 10;
let y = 20;
console.log(x + y);


//STEP18






//18.	Declare a variable called x and assign it a value of 20.
//Add and assign 20 to that variable and display the result in the console window.

let x = 20;
let y = (x + 20)
console.log(y);



//STEP19

19.	Declare a variable called x and assign it a value of 20.
Multiply and assign 5 to that variable and display the result in the console window.
The result should be 100.

let x = 20;
let y = (x * 5);
console.log(y);

//STEP20


/*20.	Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.

Divide and assign 1 to that variable and display the result in the console window.
The result should be 2. If you got 6.66 try again.

let x = 2;
let y = (20 % 3);
console.log(y);




//STEP21





//21.	Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

let x = 1;
let y = 2;
let z = (x + y);
z = 3;
console.log(z);




//STEP22

//22.	Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window.The application cannot use the same operators used in the previous application.

let x = 1;
let y = 2;
let z = (x + y);
z = 3;
console.log(z);


