//  P1. Write a function called foo() which prints 'foo' and a function called bar() which prints 'bar'. Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.

/* Solution 1:

function foo() {
    console.log('foo');
    bar();
}

function bar() {
    console.log('bar');
}

foo();
*/

// P2. Write a function called make_avg()  which will take three integers and return the average of those values.

/* Solution 2.

function make_avg(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    var avg = sum / 3;
    return avg;
}
var average = make_avg(10, 20, 30);
console.log('The average is:', average);
*/

// P3. Write a function called make_avg() which will take an array of integers and the the size of that array and return the average of those values.

/* Solution 3:

function make_avg(array)
{
console.log(array);
console.log(array.length);

/*************** 1st method *****************/
// var sum = 0;
// for (var i = 0;
//     i < array.length;
//     i++) {
//     sum += array[i];
// }
// console.log(sum);
// var average = sum / array.length;
// return average;

/*************** 2nd method *****************/
//An accumulator is a variable remembered throughout all iterations to store the accumulated results of looping through an array.// 

// The reduce() method loops over the array and calls the reducer function to store the value of array computation by the function in an accumulator.

// var reducer = (accumulator, curr) => accumulator + curr;
// console.log(arr.reduce(reducer));
// var average = (arr.reduce(reducer)) / array.length;
// console.log(average);
// return average;

/*************** 3rd method *****************/

// var lodash = require('lodash');
// var sum = lodash.sum(array);
// console.log(sum);

//     }

// var arr = [10, 20, 30, 40, 25];
// var avg = make_avg(arr);
// console.log('The average is:', avg);
// */

// P4. Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it 2 ways:
// * Has return + Has parameter
// * No return + Has parameter

/* Solution 4:

/ *************** Has return + Has parameter **************/
// function odd_even(num) {
//     if (num % 2) {
//         console.log('Odd Number');
//     }
//     else {
//         console.log('Even Number');
//     }
//     return (num % 2);
// }
// var number = odd_even(27);
// console.log('The reminder is:', number);

/**************** 2nd way *****************/

// function odd_even(number) {
//     if (number % 2 === 0) {
//         console.log('Even number');
//         return true;
//     }
//     else {
//         console.log('Odd Number');
//         return false;
//     }
// };

// var num = odd_even(8);
// console.log(num);

// *********** No return + Has parameter ***********//
// function odd_even(num) {
//     if (num % 2) { console.log('Odd Number'); }
//     else { console.log('Even Number'); };
// }
// odd_even(8);
/***/

// P5.  You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up.

/*** Solution 5:

/************ using if-else ***********/
// var signal = 'yellow';

// if (signal == 'green') {
//     console.log('Cross The road');
// }
// else if (signal == 'yellow') {
//     console.log('Wait until the signal is green');
// }
// else {
//     console.log('Do not cross the road');
// };

/************ using switch ***********/
// var signal = 'red';
// switch (signal) {
//     case 'green': console.log('Cross the road'); break;
//     case 'yellow': console.log('Wait until the signal is green'); break;
//     default: console.log('Do not cross the road');
// }
// ****/

// P6. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

/* Solution 6:
function multiplicationTable(num) {
    var namtarArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (i = 0; i < namtarArray.length; i++) {
        var output = num * namtarArray[i];
        console.log(output);
    }
}

multiplicationTable(15);
*/

// P7. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

/* Solution 7. 

function caseConverter(name) {
    var nam = name.toLowerCase();
    return nam;
}

var convertedName = caseConverter('JAVA script VALO kore SHIKTHE Hobe');
console.log(convertedName);
*/

// P8. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

/* Solution 8: 

function fullName(part1, part2) {

    var puraNam = part1 + ' ' + part2;
    return puraNam;
}

var fullname = fullName('Syed Mostafizur', 'Rahman')
console.log(fullname);
*/

// P9. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  

/* Solution 9: 

function square(num) {
    var result = num * num;
    return result;
}
var numberSquare = square(7);
console.log(numberSquare);
*/

// P10. pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
// const pizza = {

//     toppings: ['cheese', 'sauce', 'pepperoni'],

//     crust: 'deep dish',

//     serves: 2

//    }

//    এবং pepperoni প্রিন্ট করবা।

/* Solution 10: */

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}

console.log(pizza.toppings[2]);
