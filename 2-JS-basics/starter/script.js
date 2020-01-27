/********************************************************************
 * Variables and data types 
*/ 

/* var firstName = 'Shawn';
console.log(firstName);

var lastName = 'Bash';
var age = 39;

var fullAge = true;
console.log(fullAge);

var job = 'Consultant';
console.log(job);

// Variable naming rules
var _3years = 3;
var shawnMichelle = 'Shawn and Michelle'; */


/********************************************************************
 * Variable mutation and type coercion
*/ 

/* var firstName = 'Shawn';
var age = 39;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Consultant';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'thirty nine';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName); */


/********************************************************************
 * Basic operators
*/ 

/* var now, yearShawn, yearMichelle;
now = 2019;
ageShawn = 39;
ageMichelle = 41;

// Math Operators
yearShawn = now - ageShawn;
yearMichelle = now - ageMichelle

console.log(yearShawn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var shawnOlder = ageShawn < ageMichelle
console.log(shawnOlder);

// typeof operator
console.log(typeof shawnOlder);
console.log(typeof ageShawn);
console.log(typeof 'Shawn is younger than Michelle');
var x;
console.log(typeof x); */


/********************************************************************
 * Operator precedence
*/ 

/*  var now = 2019;
 var yearShawn = 1980;
 var fullAge = 18;

 // Multiple operators
 var isFullAge = now - yearShawn >= fullAge;
 console.log(isFullAge);

 // Grouping
 var ageShawn = now - yearShawn
 var ageMichelle = 41;
 var average = (ageShawn + ageMichelle) / 2;
console.log(average);
 
// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;  // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2  // x = x * 2
console.log(x);
x += 10 // x = x + 10
console.log(x);
x++  // x = x + 1
console.log(x); */


/********************************************************************
 * CODING CHALLENGE 1
*/ 

/* 
Mark and John are trying ot compare their BMI(Body Mass Index), which is 
calculated using the formula: BMI = mass / height^2.
1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMI's.
3. Create a boolean variable containing information whether Mark has a 
higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
*/

// 1.
/* var massMark = 85;
var massJohn = 80;
var heightMark = 2.0;
var heightJohn = 1.8;

// 2.
var bmiMark = (massMark / (heightMark * heightMark));
var bmiJohn = (massJohn / (heightJohn * heightJohn));

// 3.
var markBmiHigherThanJohn = bmiMark > bmiJohn;

// 4. 
console.log(`Is Mark's BMI higher than John's?: ${markBmiHigherThanJohn}`); */


/********************************************************************
 * If / else statements
*/ 

/*  var firstName = 'Shawn';
 var civilStatus = 'married';

 if (civilStatus === 'single') {
    console.log(`${firstName} is single`);
 } else {
     console.log(`${firstName} is married`);
     
 }

 var isMarried = false
 if (isMarried) {
    console.log(`${firstName} is married`);
 } else {
     console.log(`${firstName} is still single`);
     
 }

 // 1.
var massMark = 85;
var massJohn = 80;
var heightMark = 2.0;
var heightJohn = 1.8;

// 2.
var bmiMark = (massMark / (heightMark * heightMark));
var bmiJohn = (massJohn / (heightJohn * heightJohn));

// 3.
var markBmiHigherThanJohn = bmiMark > bmiJohn;

// 4. 
//console.log(`Is Mark's BMI higher than John's?: ${markBmiHigherThanJohn}`);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI higher than John\'s');
} else {
    console.log('John\'s BMI higher than Mark\'s');
} */


/********************************************************************
 * Boolean logic
*/ 

/* var firstName = 'Shawn';
var age = 21;

if (age < 13) {
    console.log(`${firstName} is a boy`);
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young man`);
} else {
    console.log(`${firstName} is a man`);
} */


/********************************************************************
 * Ternary operator and Switch statements
*/ 

/*  var firstName = 'Shawn';
 var age = 39;

 // Ternary operator
 age >= 18 ? console.log(`${firstName} drinks beer`) : console.log(`${firstName} drinks juice.`);
 
 var drink = age >= 18 ? 'beer' : 'juice';
 console.log(`${drink}!!`);
 
 // Switch statement
 var job = 'consultant';
 switch(job) {
    case 'consultant':
    case 'IT Genius':
         console.log(`${firstName} is a consultant`);
         break;
    case 'driver':
        console.log(`${firstName} is a driver`);
        break;
    case 'teacher':
        console.log(`${firstName} is a teacher`);
        break;
    default:
        console.log(`${firstName} is a bum`);
 }

 switch(true) {
    case age < 13:
        console.log(`${firstName} is a boy`);
        break;
    case age >= 13 && age < 20:
        console.log(`${firstName} is a teenager`);
        break;
    case age >= 20 && age < 30:
        console.log(`${firstName} is a young man`);
        break;
    default:
        console.log(`${firstName} is a man`);
 } */


/********************************************************************
 * Truthy and Falsy values and equality operators
*/ 

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/* var height;

height = 23;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!!');
} */


/********************************************************************
 * CODING CHALLENGE 2
*/ 

 /* 
 John and Mike both play basketball in different teams.  In the latest
 3 games, John's team scored 89, 120, and 103 points, while Mike's team
 scored 116, 94, and 123 points.

 1. Calculate the average score for each team.
 2. Decide which teams wins in the average (highest average score),
    and print the winner to the console.
3.  Change the scores to show different winners.  Donte forget to take
    into account there might be a draw (the same average score).

4.  EXTRA: Mary also plays basketball, and her team scired 97, 134, and 105
    points.  Like before, log the average winner to the console. HINT: you 
    will need the && operator to take the decision.  If you cant solve this
    one, just watch the solution, it's not problem.
5.  Like before, change the scores to generate different winners, keeping 
    in mind there might be draws.
 */

/*  // 1.
 var scoreJohn = (89 + 120 + 103) / 3;
 var scoreMike = (116 + 94 + 123) / 3;

 // 2-3.
 if (scoreJohn > scoreMike) {
     console.log(`John\'s team wins with ${scoreJohn} points`);
 } else if (scoreMike > scoreJohn) {
    console.log(`Mike\'s team wins with ${scoreMike} points`);
 } else {
     console.log('There was a draw');
 }

 // 4.
 var scoreMary = (97 + 134 + 105) / 3

 // 5.
 if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log(`John\'s team wins with ${scoreJohn} points`);
} else if (scoreMike > scoreJohn & scoreMike > scoreMary) {
   console.log(`Mike\'s team wins with ${scoreMike} points`);
} else if (scoreMary > scoreJohn & scoreMary > scoreMike) {
    console.log(`Mary\'s team wins with ${scoreMary} points`); 
} else {
    console.log('There was a draw');
} */


/********************************************************************
 * Functions
*/ 

/* function calculateAge(birthYear) {
    return 2019 - birthYear
}

var ageShawn = calculateAge(1980);
var ageMichelle = calculateAge(1978);

console.log(ageShawn, ageMichelle);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement <= 0) {
        console.log(`${firstName} is already retired`);
    } else {
         console.log(`${firstName} retires in ${retirement} years!`);
    }
}

yearsUntilRetirement(1980, 'Shawn') */


/********************************************************************
 * Function Statements and Expressions
*/ 

// function declaration
// function whatDoYouDo(job, firstName) {} 

// function expressions
/* var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designes beautiful websites';
        default:
            return firstName + ' is a bum!!'
    }
 }

 console.log(whatDoYouDo('teacher', 'Shawn'));
 console.log(whatDoYouDo('driver', 'Chuck'));
 console.log(whatDoYouDo('hair stylist', 'Michelle')); */

 
/********************************************************************
 * Arrays
*/ 

/* // initialize new array
var names = ['Shawn', 'Michelle', 'Chuck'];
var years = new Array(1980, 1978, 1950);

console.log(names[0]);
console.log(names.length);

// mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary'
console.log(names);
 
// different data types
var shawn = ['Shawn', 'Bash', 1980, 'designer', true];

shawn.push('blue');     // add to end
shawn.unshift('Mr.')    // add to beginning
console.log(shawn);

shawn.pop();            // remove from end
shawn.pop();
shawn.shift();          // remove from beginning
console.log(shawn);

console.log(shawn.indexOf(1980));

var isDesigner = shawn.indexOf('designer') === -1 ? 'shawn is not a designer' : 'shawn is a designer';
console.log(isDesigner); */


/********************************************************************
 * CODING CHALLENGE 3
*/ 

 /* 
John and his family went on a holiday and went to 3 different restaraunts.  
The bills were $124, $48, and $268.  To tip the waiter a fair amount, John
created a simple tip calculator (as a function).  He likes to tip 20% when 
the bill is less than $50, 15% when the bill is between $50 and $200, and 
10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three paid amounts (bill + tip)
(NOTE: To calculate 20% of the value, multiply it with 20/100 = 0.2)
 */

/*  var bills = [124, 48, 268];
 var tips = [];
 var paidAmounts = [];

 function calculateAmounts (bills) {
    bills.forEach(bill => {
        if (bill < 50) {
            tips.push(bill * 0.2);
            paidAmounts.push(bill * 1.2);
        } else if (bill >= 50 && bill <= 200) {
            tips.push(bill * 0.15);
            paidAmounts.push(bill * 1.15);
        } else {
            tips.push(bill * 0.1);
            paidAmounts.push(bill * 1.1);
        }
    });
 }

 calculateTips(bills);
 console.log(tips);
 console.log(paidAmounts); */


/********************************************************************
 * Objects and Properties
*/ 
 
/* // object literal
var shawn = {
    firstName: 'Shawn',
    lastName: 'Bash',
    birthYear: 1980,
    family: ['Michelle', 'Delaney', 'Hendrix'],
    job: 'consultant',
    isMarried: true
};

console.log(shawn.firstName);
console.log(shawn['lastName']);
var x = 'birthYear'
console.log(shawn[x]);

shawn.job = 'teacher';
shawn['isMarried'] = false;
console.log(shawn);

// new object syntax
var michelle = new Object();
michelle.name = 'Michelle';
michelle.birthYear = 1978;
michelle['lastName'] = 'Bash';
console.log(michelle); */


/********************************************************************
 * Objects and Methods
*/ 

/* var shawn = {
    firstName: 'Shawn',
    lastName: 'Bash',
    birthYear: 1980,
    family: ['Michelle', 'Delaney', 'Hendrix'],
    job: 'consultant',
    isMarried: true,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    }
};

shawn.calcAge();
console.log(shawn); */


/********************************************************************
 * CODING CHALLENGE 4
*/ 

/* 
Let's rememver the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, 
   and height.
2. Then, add a method to each object to calculate the BMI.  Save the BMI to teh object
   and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full anme 
   and the respective BMI.  Don't forget they might have the same BMI.

Remember: BMI = mass / (height * height)

var massMark = 85;
var massJohn = 80;
var heightMark = 2.0;
var heightJohn = 1.8;
*/

/* // 1-2.
var mark = {
    fullName: 'Mark Miller',
    mass: 85,
    height: 2.0,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var john = {
    fullName: 'John Smith',
    mass: 80,
    height: 1.8,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

// 3.
if(john.calcBmi() > mark.calcBmi()) {
    console.log(`${john.fullName} has a higher BMI of ${john.bmi}`);
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} has a higher BMI of ${mark.bmi}`);
} else {
    console.log(`Both ${mark.fullName} and ${john.fullName} have the same BMI.`);
}
 */


 /********************************************************************
 * Loops and Iteration
*/ 

// for loop
// for (var i = 0; i <= 9; i++) {
//     console.log(i);
// }
// var shawn = ['Shawn', 'Bash', 1980, 'designer', true];
// for (var i = 0; i < shawn.length; i++) {
//     console.log(shawn[i]);
// }

// while loop
// var i = 0;
// while (i < shawn.length) {
//     console.log(shawn[i]);
//     i++;
// }

// continue with break statements
// var shawn = ['Shawn', 'Bash', 1980, 'designer', true];
// for (var i = 0; i < shawn.length; i++) {
//     if (typeof shawn[i] !== 'string') continue;
//     console.log(shawn[i]);
// }
// for (var i = 0; i < shawn.length; i++) {
//     if (typeof shawn[i] !== 'string') break;
//     console.log(shawn[i]);
// }

// // looping backwards
// for (var i = shawn.length - 1; i >= 0; i--) {
//     console.log(shawn[i]);
    
// }


/********************************************************************
 * CODING CHALLENGE 5
*/ 

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
   After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

// 1


































