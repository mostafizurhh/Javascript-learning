// P1. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 
/* Solution 1: */
// var name = 'rasal';
// var age = 35;
// var gender = 'male';

// P2. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 

/* Solution 2: */
// for (let i = 1; i <= 100; i++)
//  { console.log(i); }


// P3. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

/* Solution 3: */
// for (let i = 50; i < 80; i++)
// {
//     if (i % 2 == 1) { console.log(i); }
// }


// P4. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 

/* Solution 4: */
//         function addNumbers(num1, num2, num3) {
//             let sum = num1 + num2 + num3;
//             return sum;
//         }

// let sum = addNumbers(3, 4, 5);
// console.log(sum);

// P5. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে.

/* Solution 5: */

// function temperatureConverter(celsius) {
//     let fahrenheit = (celsius * (9 / 5)) + 32;
//     return fahrenheit;
// }

// let fahrenheit = temperatureConverter(40);
// console.log('Temperature is:', fahrenheit, '°F');

// P6. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

// function temperatureConverter(fahrenheit) {
//     let celsius = (fahrenheit - 32) * (5 / 9);
//     return celsius.toFixed(2);
// }

// let celsius = temperatureConverter(40);
// console.log('Temperature is:', celsius, '°C');

// P7. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

/* Solution 7: */
// let marks = 27;
// if (marks >= 80) { console.log('A+'); }
// else if (marks >= 70 && marks < 80) { console.log('A'); }
// else if (marks >= 60 && marks < 70) { console.log('A-'); }
// else if (marks >= 50 && marks < 60) { console.log('B'); }
// else if (marks >= 40 && marks < 50) { console.log('C'); }
// else if (marks >= 33 && marks < 40) { console.log('D'); }
// else { console.log('F'); }

// P8. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। SimpleInterest = P X R X N; compoundInterestWithoutPrinciple = P(1 + R/N)^nt - P; compoundInterestWithPrinciple = P(1 + R/N)^nt; 

/* Solution 8: */
// function simpleInterest(principleAmount, rateInPercentege, timeInYear) {
//     let interest = principleAmount * rateInPercentege * timeInYear;
//     return interest;
// }

// let interest = simpleInterest(100, 0.025, 1);
// console.log(interest);

/* Math.pow(x,y) ==> to show exponential numbers. */
function compoundInterest(p, r, n, t) {
    let interest = p * Math.pow((1 + (r / n)), (n * t));
    return interest.toFixed(3);
}

let interest = compoundInterest(5000, 0.05, 12, 10);
console.log('The interest is:', interest);


