// Find Factorial of a number.

/* forward way */
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

var resultOfFactoril = factorial(5);
console.log('The factorial of the number is:', resultOfFactoril);

/* reverse way */
function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}

var resultOfFactoril = factorial(5);
console.log('The factorial of the number is:', resultOfFactoril);