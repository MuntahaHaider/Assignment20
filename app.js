//Chap 31-40 (Date &amp; Time)

// Q1
var dObj = new Date();

// Q2
var dStr = new Date().toString();

// Q3
var d = new Date();
var date = d.getDay(); 

// Q4
var d = new Date();
var daysName =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
alert(daysName[d.getDay()]);

// Q5
var currentDate = new Date();

var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var date = currentDate.getDate();
var day = currentDate.getDay();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var milliseconds = currentDate.getMilliseconds();

console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);

// Q6
var date = new Date();
date.setFullYear(2022);
date.setMonth(11);
date.setDate(31);
console.log(date);

// Q7
var date = new Date();
date.setFullYear(1992);
date.setMonth(1);
date.setDate(2);
console.log(date);

// Q8
alert(new Date(1980, 0, 1).getTime());

// Q9
var date = new Date(); // Current date
date.setFullYear(2023); // Change the year to 2023
alert(date)

// Q10
// setMonth()

// Q11
// The . setDate() method changes the day of the month of a provided date according to local time.

// Q12

// Q13

// Q14



//Chap 35 - 37 (Functions)

// Q1
function displayAlert() { }

// Q2
function askName() {
    var userName = prompt("Enter name:");

}

// Q3
function main() {
    function One () {
           console.log("First Name: Muntaha")
    }

    function Two () {
        console.log("Last Name: Haider")
    }
}


// Q4
function displayName () {
    var name = prompt("Enter Name.");
    if (name !== null && name !== "") {
        alert("Hello, " + name + "!");
    } 
    else {
        alert("You did not enter a name!");
    }

}
displayName()

// Q5
// function concat ( var , str, num ) { }
 

// Q6
function concatenateStrings(str1, str2) {
    var concatenated = str1 + str2;
    return concatenated;
}


// Q7
function multiply (str1, str2, str3){
    var multi = str1* str2* str3
     return multi;
}

// Q8
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// function calculateAverage(number){ 
//     var sum = 0;
//     for(var i = 0 , i < number.length; i++) {
//           sum += number[i];
//     }
//     return sum / number.length;
// }

// Q9
function calculateSum(num1, num2) {
    return num1 + num2;
}


// Q10
// same as Q8

// Q11


// Q12



// Q13

function setYear(date, year) {
    date.setFullYear(year);
}

// Q14


// Q15
var array = ["zaid","haris","raza","abubakkar","hassan","husain","fatima"]
function checkPresence(word, array) {
    return array.includes(word);
}


// Q16
function repeatLetter(letter) {
    return letter.repeat(10);
}

// Q17
function reverseArray(array) {
    return array.reverse();
}



//Chap 38 (Local vs. Global Variables)

// Q1
function greet() {
    var message = "Hello, I'm a local variable!";
    console.log(message);
}

greet(); // Output: Hello, I'm a local variable!

// Q2
var globalVar = "Hello, I'm a global variable!";

function myFunction() {
    console.log(globalVar);
}

myFunction(); // Output: Hello, I'm a global variable!



//Chap 39, 40 (Switch Statements)

// Q1
var day = "Monday";

switch (day) {

    case "Monday":
        console.log("It's Monday. Time to start the week!");
        break;

    case "Tuesday":
        console.log("It's Tuesday. Let's tackle those tasks!");
        break;

    case "Wednesday":
        console.log("It's Wednesday. Halfway through the week!");
        break;

    case "Thursday":
        console.log("It's Thursday. Almost there, hang in there!");
        break;

    case "Friday":
        console.log("It's Friday. Weekend is almost here!");
        break;

    case "Saturday":
        console.log("It's Saturday. Time to relax and enjoy!");
        break;

    case "Sunday":
        console.log("It's Sunday. Let's recharge for the week ahead!");
        break;

    default:

        console.log("Invalid day!");
}




// Q2
var cityName = prompt("Enter a city name:");

switch (cityName) {

    case "Paris":
        alert("You entered Paris. The capital of France!");
        break;

    case "London":
        alert("You entered London. The capital of the United Kingdom!");
        break;

    case "New York":
        alert("You entered New York. The largest city in the United States!");
        break;

    default:
        alert("Sorry, the city you entered is not recognized.");
}



                //* ================= THE END ================= *//




// chapter 31-34 (DATE METHODS)

// Q1
var date = new Date();
date.setFullYear(2015);
date.setMonth(11);
date.setDate(5);
document.write(date);


// Q2
var date = new Date()
var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ]; 
alert("Current month: " + months[date.getMonth()])

// Q3
var date = new Date()
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log("Today is: " + days[date.getDay()])

// Q4
var currentDate = new Date();
var currentDay = new Date().getDay();
if (currentDay === 0 || currentDay === 6) {
    alert("Its Fun day");
}

// Q5
var currentDate = new Date();
var currentDay = currentDate.getDate();

if (currentDay <= 15) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// Q6


// Q7
var date = new Date()
date.getHours()
if(date < 12 ){
    alert("It's AM");
} else {
    alert("It's PM");
}

// Q8
var laterDate = new Date()
laterDate.setFullYear(2020);
laterDate.setMonth(11);
laterDate.setDate(31);
console.log(laterDate);

// Q9
// Create a date object for the starting date of Ramadan 2015 (June 18, 2015)
var ramadanStartDate = new Date('June 18, 2015');

// Get the current date
var currentDate = new Date();

// Calculate the number of milliseconds between the current date and the starting date of Ramadan
var millisecondsSinceRamadanStart = currentDate - ramadanStartDate;

// Convert milliseconds to days
var daysSinceRamadanStart = millisecondsSinceRamadanStart / (1000 * 60 * 60 * 24);

// Round the number of days to get an integer value
daysSinceRamadanStart = Math.round(daysSinceRamadanStart);

// Alert the number of days that have passed since the starting date of Ramadan
alert("Number of days past since 1st Ramadan: " + daysSinceRamadanStart);


// Q10
// Q11
// Q12


// Q13
var age = +prompt("Enter your age....")
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("<h2> Your age is: " + age + "<br>Your birth year is: " + birthYear + "</h2>");


// Q14
var customerName = prompt("Enter your Name?")
var date = new Date().getMonth()
var Numberofunits = 410 
var  ChargesperUnit = 16
var numchar = Numberofunits*ChargesperUnit
var LatePaymentSurcharge = 350 
var grossAmount = numchar + LatePaymentSurcharge

document.write("<h2>K=Electric Bill " + "<br>Customer Name: " + customerName + "<br>Month: " + date + "<br>Number of Units: " + Numberofunits + "<br> Charges per Unit: " + ChargesperUnit + "<br><br>Net Amount Payable (within Due Date): " + numchar + "<br>Late Payment Surcharge: " + LatePaymentSurcharge + "<br>Gross Amount Payable (after Due Date): " +grossAmount + "</h2>"  )


// chapter 35-38 (FUNCTIONS)

// Q1
function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
var result = power(2, 3); // Calculates 2 raised to the power of 3
console.log(result); // Output: 8

// Q2
// Q3
// Q4
// Q5
// Q6
// Q7
// Q8
// Q9
// Q10
// Q11
// Q12
// Q13
// Q14



// chapter 39-42 (FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS)

// Q1
// Q2
// Q3
// Q4
// Q5
// Q6
// Q7
// Q8
// Q9
// Q10