// Practice problem ---- M-17 (Array, Condition)

// **********************************************************************
// P1. You have given an array:
//                        var fruits = ['Apple', 'Banana', 'Orange'];
// 
//  a) Find the index of 'Banana' and replace it with 'Mango'.
//  b) Remove 'Orange' and add 'Watermelon'. 

// Solution1:

// a) 
// var fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits);

// var indexOfBanana = fruits.indexOf('Banana');
// console.log(indexOfBanana);

// fruits[1] = 'Mango';
// console.log(fruits);

// // b)
// // var removedFruit = fruits.pop();
// // console.log(removedFruit);
// fruits.pop();
// console.log(fruits);

// fruits.push('Watermelon');
// console.log(fruits);

// **********************************************************************

// P2. You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom's, Jane's, Peter's and John's total scores are 66, 95, 56 and 40. The grading chart is

//             80 or above grade A
//             60 or above grade B
//             50 or above grade C
//             40 or above grade D
//             39 or less => grade F

// Write a program to find your and your friends grades using if-else.

// Solution2:
// var marks = 39;
// var A = 80;
// var B = 60;
// var C = 50;
// var D = 40;

// var amarMark = 85;
// var tomerMark = 66;
// var janerMark = 95;
// var petererMark = 56;
// var johnerMark = 40;

// var studentsMark = [85, 66, 95, 56, 40];

// if (amarMark >= A || amarMark >= B || amarMark >= C || amarMark >= D) { console.log('pass korchi') }
// else { console.log('bashai gale khobor ase') };

// if (studentsMark >= A) { console.log('A paise') }
// else { console.log('A paini') };

// if (marks >= A) { console.log('A grade') }
// else if (marks >= B && marks < A) { console.log('B grade') }
// else if (marks >= C && marks < B) { console.log('C grade') }
// else if (marks >= D && marks < C) { console.log('D grade') }
// else { console.log('F grade') };

// **********************************************************************

// P3. a) You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.
//     b) You ar given a triangle with the sides 9,8,9. write a program to check whether a triangle is Isosceles or not using if-else. (Isosceles => two sides are equal)

// Solution 3a:

// var number1 = 13;
// var number2 = 79;
// var number3 = 45;

// if (number1 > number2 && number1 > number3) { console.log(number1) }
// else if (number2 > number1 && number2 > number3) { console.log(number2) }
// else { console.log(number3) };

// Solution 3b:

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 === side2 || side1 === side3 || side2 === side3) { console.log('It is a Isoscele triangle') }
else { console.log('This is not a Isoscele triangle') };