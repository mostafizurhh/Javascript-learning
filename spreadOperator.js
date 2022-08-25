/*Spread Operator(...) => to quickly copy all or part of an existing array*/

const num = [1, 2, 3, 4, 5]
console.log(Math.max(...num));
console.log(Math.min(...num));

const num2 = [...num, 6, 7, 8, 9];
console.log(num2);



