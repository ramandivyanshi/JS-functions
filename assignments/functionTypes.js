// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/*Converts a number a string.
param {number} n
return {string} the number as a string*/


1. //Function Decleration
function convert(num) {
    num = prompt("Enter any number");
    let str = String(num);
    return str;
}
convert();

2. // Function Expression
let convertToString1 = function(n) {
    return String(n);
};
let number = prompt("Enter a number");
String(number);

// Arrow Function
let convertToString = n => String(n);
convertToString = function(n) {
    return String(n);
}
let num = prompt("Enter a number");
alert(convertToString(num));

3. // Arrow Function With Curly Bracket

let convertToString = n => {
    String(n);
    return String(n);
};
let num = prompt("Enter a number");
alert(convertToString(num));

4. // Function Invocation

let convertToString = (n) => {
    return String(n);
}
convertToString(45);


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
let increment = number => Number(number) + 1;
increment = function(number) {
    return Number(number) + 1;
}
let n = prompt("Enter a number");
alert(increment(n));


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
let decrement = number => Number(number) - 1;
increment = function(number) {
    return Number(number) - 1;
}
let n = prompt("Enter a number");
alert(decrement(n));

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
let sum = (x, y) => Number(x) + Number(y);
sum = function(x, y) {
    return Number(x) + Number(y);
}
let a = prompt("Enter a ");
let b = prompt("Enter b ");
alert(sum(a, b));

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
let diff = (x, y) => Number(y) - Number(x);
diff = function(x, y) {
    return Number(y) - Number(x);
}
let a = prompt("Enter a ");
let b = prompt("Enter b ");
alert(diff(a, b));

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
let pro = (x, y) => Number(y) * Number(x);
pro = function(x, y) {
    return Number(y) * Number(x);
}
let a = prompt("Enter a ");
let b = prompt("Enter b ");
alert(pro(a, b));

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
let div = (x, y) => x / y;
div = function(x, y) {
    return Number(x) / Number(y);
}
let a = prompt("Enter a ");
let b = prompt("Enter b ");
alert(div(a, b));

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
let square = (x) => x * x;
square = function(x) {
    return Number(x) * Number(x);
}
let a = prompt("Enter a ");
alert(square(a));

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
let square = (x) => x * x;
square = function(x) {
    return Number(x) * Number(x);
}
let a = prompt("Enter a ");
alert(square(a));



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function greater(x, y) {
    let z = x > y;
    return z;
}
let c = greater(a, b)
let a = prompt("Enter a");
let b = prompt("Enter b");
alert(greater(a, b));


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function lessThan(x, y) {
    let z = x < y;
    return z;
}
let c = lessThan(a, b)
let a = prompt("Enter a");
let b = prompt("Enter b");
alert(lessThan(a, b));

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function equal(x, y) {
    z = (x == y);
    return z;
}
let c = equal(a, b)
let a = prompt("Enter a");
let b = prompt("Enter b");
alert(equal(a, b));

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function lessThan(x, y) {
    if (x < y);
    return x;
}
let a = prompt("Enter a");
let b = prompt("Enter b");
alert(lessThan(a, b));

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function greater(x, y) {
    if (x < y)
        return y;
}
let a = prompt("Enter a");
let b = prompt("Enter b");
alert(greater(a, b));

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function even(n) {
    let m = (n % 2 == 0)
    return m;
}

let a = prompt("Enter a number");
let result = even(a);
alert(even(a));

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function odd(n) {
    let m = (n % 2 !== 0)
    return m;
}

let a = prompt("Enter a number");
let result = odd(a);
alert(odd(a));

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function grade(score, total) {
    switch (true) {
        case score > 90:
            alert("A");
            break;
        case (score > 80 && score < 90):
            return ("B");
            break;
        case (score > 70 && score < 80):
            return ("C");
            break;
        case (score > 60 && score < 70):
            return ("D");
            break;
        case (score > 50 && score < 60):
            return ("F");
    }
}
let marks = Number(prompt("enter your grade from1 to 100"));
let t = 100;
alert(grade(marks, t));
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function concatenate(a, b) {
    let c = (a + ' ' + b);
    return c;
}
let str1 = prompt("Enter first string");
let str2 = prompt("Enter second string");
let constr = concatenate(str1, str2);
concatenate(str1, str2);