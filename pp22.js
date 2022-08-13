// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 

/* Solution 1: */

function areaOfTraingle(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2;
    let multiplication = s * (s - side1) * (s - side2) * (s - side3);
    let area = Math.sqrt(multiplication);
    return area.toFixed(2);
}

let Area = areaOfTraingle(23, 13, 18);
// console.log('The area of the triangle is:', Area);

// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।

/* Solution 2: */

/************** my way **************/
/* ((n-1)! + 1) % n == 0 */
function isPrimeNumber(number) {
    /* find factorial */
    let result = 1;
    for (i = number - 1; i >= 1; i--) { result = result * i }
    console.log(result);
    /* check prime */
    if ((result + 1) % number === 0) { return 'is prime'; }
    else { return 'not a prime'; }
}
let num = isPrimeNumber(1);
console.log(num);

/************** 2nd way **************/

function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}
let Num = isPrime(1);
console.log(Num);

/************** 3rd way **************/

const isprime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

let Number1 = isprime(1);
console.log(Number1);