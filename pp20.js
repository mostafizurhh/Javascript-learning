// P1 . Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

/* Solution 1: */

function timeConverter(hour) {
    let minutes = hour * 60;
    return minutes;
}
minutes = timeConverter(2);
// console.log(minutes);


// P2. Write a function findLeapYear() that will take the array [2023,2024,2025,2028,2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result.

/* Solution 2: */

function findLeapYear(yearArray) {
    let newArray = [];
    for (let i = 0; i < yearArray.length; i++) {
        let element = yearArray[i];
        if (element % 4 == 0 && element % 100 != 0 || element % 400 == 0) {
            newArray.push(element);
        }
    }
    return newArray;
}

let array = [2023, 2024, 2025, 2028, 2030];
let isLeapYear = findLeapYear(array);
// console.log(isLeapYear);


// P3. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

/* Solution 3: */

function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) { return true; }
    else { return false; }
}

let year = 2023;
let checkLeapYear = leapYear(year);
// console.log(checkLeapYear);


// P4. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

/* Solution 4: */

function myAge(age) {
    if (age % 2 == 0) {

        return true;
    }
    else {

        return false;
    }
}
let age = myAge(35);
// console.log(age);


// P5. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে. 

/* Solution 5: */

function converter(hour) {
    let second = hour * 3600;
    return second;
}

let totaltime = converter(4);
console.log('Total time remianing is:', totaltime, 'second')