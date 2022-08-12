// P1. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। Return the largest and smallest number of an array.

/* Solution 1: */
/*********1st way ************/
// let array = [23, 432, 123, 12, 475, 6];
// const max = array.reduce((a, b) => Math.max(a, b), -Infinity);
// const min = array.reduce((a, b) => Math.min(a, b));
// console.log(max, ',', min);

/*********2nd way ************/
// let arr = [23, 432, 123, 12, 475, 6];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

/*********3rd way ************/
// function smallNumber(Array) {
//     smallest = Array[0];
//     for (i = 0; i < Array.length; i++) {
//         element = Array[i];
//         if (element < smallest) { smallest = element; }
//     }
//     return smallest;
// }

// let Arr = [23, 432, 123, 12, 475, 6];
// let small = smallNumber(Arr);
// console.log(small);


// P2. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে। 

/* Solution 2: */

// function smallestNumber(num1, num2, num3) {
//     let min = Math.min(num1, num2, num3);
//     return min;
// }

// let minimum = smallestNumber(34, 23, 12);
// console.log(minimum);


// P3. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

/* Solution 3: */

// function avgOfArray(array) {
//     sum = 0;
//     for (i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     let avg = sum / array.length;
//     return avg.toFixed(2);
// }

// let myArr = [5, 4, 3, 6, 7, 8, 9, 2, 3];
// let Avg = avgOfArray(myArr);
// console.log(Avg);


// P4. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

/* Solution 4: */

// function areaOfRectengle(length, width) {
//     let area = length * width;
//     return area;
// }

// let Area = areaOfRectengle(5, 6);
// console.log('The area is:', Area, 'm^2');

// P5. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

/* Solution 5: */

/*********1st way ************/
// arr = [20, 120, 111, 215, 54, 178];
// let secondlargest = arr.sort(function (x, y) { return y - x })[1];
// console.log(secondlargest);

/*********2nd way ************/
// arr = [20, 120, 111, 215, 54, 178];
// let secondlargest = arr.sort((x, y) => y - x)[1];
// console.log(secondlargest);

/*********my way ************/

// function secondLargest(arraY) {
//     let max = Math.max(...arraY);
//     arraY.splice(arraY.indexOf(max), 1);
//     let Largest = arraY[0];
//     for (i = 0; i < arraY.length; i++) {
//         let element = arraY[i];
//         if (Largest < element) { Largest = element }
//     }
//     return Largest;
// }

// let myarray = [5, 6, 78, 34, 56, 7];
// let Secondlargest = secondLargest(myarray);
// console.log('The second largest number is:', Secondlargest);

arr = [20, 120, 111, 215, 54, 78];
let max1 = arr[0];
let max2 = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (max1 < arr[i]) {
        max2 = max1;
        max1 = arr[i];
    }
    else if (max2 < arr[i]) { max2 = arr[i]; }
}
console.log(max2);