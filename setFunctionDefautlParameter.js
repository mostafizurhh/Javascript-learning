/*********Old method1 to set default parameter to any value*******/

// function add(num1, num2) {
//     if (num2 == undefined) { num2 = 0 }
//     const total = num1 + num2;
//     return total;
// }
// let addition = add(10);
// console.log(addition);

/********Old method2 to set default parameter to any value********/

// function add(num1, num2) {
//     num2 = num2 || 0;
//     const total = num1 + num2;
//     return total;
// }
// let addition = add(10);
// console.log(addition);

/**********Method3 to set default parameter to any value*********/

function add(num1, num2 = 0) {
    const total = num1 + num2;
    return total;
}
let addition = add(10, 12);
console.log(addition);

function userName(firstName, lastName = 'Rahman') {
    const fullName = firstName + ' ' + lastName;
    return fullName;
}
let fullName = userName('Syed Mostafizur');
console.log(fullName);
