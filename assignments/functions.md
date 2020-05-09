1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js

function calculateDogAge(yourPuppysAge){
let humanAge=prompt("humanAge?",'');
yourPuppysAge=humanAge*1/7;
let result=alert("Your doggie is"+' '+yourPuppysAge+' '+"years old in dog years!");
return result;}
calculateDogAge();


```
2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
function calculateSupply(age,amountPerDay){
let maxAge=prompt("Enter maximum age-");
amountPerDay=prompt("Enter amount per day in floating point-");
let amountForLife=maxAge*amountPerDay*365;
let result= Math.round(amountForLife);
return result=alert("You will need "+' '+result+' '+"to last you until the ripe old age of"+' '+maxAge);;}
calculateSupply();

```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
function celsiusToFahrenheit(){
  let celsius=prompt("Enter temperature in celsius-")
  let fahrenheit=alert(celsius+"°C"+' '+"is"+' '+((celsius*9/5)+32)+' '+"°F");
  return fahrenheit;
}
celsiusToFahrenheit();

function fahrenheitToCelsius(){
   let fahrenheit=prompt("Enter temperature in fahrenheit-")
  let celsius=alert(fahrenheit+"°F"+' '+"is"+' '+((fahrenheit-32)*5/9)+' '+"°C");
  return celsius;
}
 fahrenheitToCelsius();
```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  age=prompt("Enter your Age");
  if (age > 18) {
    return true;
  } 
else {
    return confirm("Did parents allow you?");}
}
checkAge();
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  function checkAge(age) {
  age=prompt("Enter your Age");
  let welcome=(age > 18)?
  alert("hello"):
  alert("Greetings");
    return welcome;
  } 
checkAge();
  ```

  4.2 🎖Convert the above function using `||` operator.
  ```js
   function checkAge(age) {
  age=prompt("Enter your Age");
  if(age>18||age==18)
alert("Welcome");
else
alert("Greetings");
  } 
checkAge();
  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {age=prompt("enter your age");
  if (age > 18) {
    return true;
  }
  return confirm("Did parents allow you?");
}
checkAge(); //Yes, it's working in the same way with else.
```
Is there any difference in the behavior of these two variants? If there is what is that?
 // I did'nt find one.

5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
function pow(x,n){
let power=1;
for(let i=0;i<n;i++){
power*=x;
}
return power;
}
let number=prompt("Enter value of x");
let exponent=prompt("Enter value of n");
if(exponent>1)
alert (pow(number,exponent));
else
alert("Enter natural data values");


6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.


choice=prompt("Choose between sum or product");
if(choice==sum){
function sum(n){
let add=0;
for(let i=1;i<n+1;i++){
  add+=i;}
  return add;
}
let number=prompt("Enter value of n");
let result=Number(sum(number));
alert(result);}
else
function product(n){
let mul=1;
for(let i=1;i<n+1;i++){
  mul*=i;}
  return mul;
}
number=prompt("Enter value of n");
alert (Number(product(number)));

6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

function sum(n){
let add=0;
for(let i=1;i<n+1;i++){
  add+=i;}
  return add;
}
let number=prompt("Enter value of n");
let result=Number(sum(number));
alert(result);

7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

function sum(n){
let add=0;
for(let i=1;i<n;i++){
  if((i%5===0)||(i%7===0)||(i%5===0 && i%7===0))
  add+=i;}
  return add;
}
let number=prompt("Enter value of n");
let result=Number(sum(number));
alert(result);

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
function min(first,second){
if(first<second)
return first;
else 
return second;
}
let num1=prompt("Enter first number");

let num2=prompt("Enter second number");
alert (min(num1,num2));

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```