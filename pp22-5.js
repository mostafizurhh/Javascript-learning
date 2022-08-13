// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 

/* Answer: */
let str = 'book';
let num = 8;
let isBoolean = true;

/**************************************************************************/

// তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

/* Answer: */
let i = 6;
// while (i <= 19) {
//     i++;
//     if (i % 2 == 1) { console.log(i) }
// }

/**************************************************************************/

// তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

/* Answer: */

let arr = [2, 3, 4, 5, 67, 87];
// console.log(arr.length);
arr[3] = 6;
// console.log(arr);
let sum = arr[3] + arr[2];
// console.log(sum);
arr.splice(2, 0, 8, 9);
// console.log(arr);
arr.pop();
// console.log(arr);

/**************************************************************************/

// তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

/* Answer: */
let Array = [2, 3, 4, 5, 67, 87];
for (i = 0; i < Array.length; i++) {
    let element = Array[i];
    // console.log(element);
}

/* OR */

let myArray = [4, 5, 6, 7, 8, 9];
let newArray = [];
for (let x of myArray) { newArray += x + ','; }
// console.log(newArray);

/**************************************************************************/

// তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

/* Answer: */

var Arr = [45, 67, 897, 76, 878, 45, 87, 84, 23];
for (i = 0; i < Arr.length; i++) {
    let element = Arr[i];
    // if (element > 80) { console.log(element) }
}

/**************************************************************************/

// একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

/* Answer */

let myObject = { name: 'iPhone', camera: '13MP', price: 91000 }
myObject.camera = '18MP'
// console.log(myObject);

/**************************************************************************/

// সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

/* Answer */
function feetToInch(feet) {
    let inch = 12 * feet;
    return inch;
}

let result = feetToInch(3);
// console.log(result, 'inch');

/**************************************************************************/

// একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

/* Answer */
function centimeterToMeter(centimeter) {
    let meter = centimeter / 100;
    return meter;
}

let Meter = centimeterToMeter(100);
// console.log(Meter, 'meter');

/**************************************************************************/

// আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// এইবার ভালো করে খেয়াল করো। 

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

/* Answer */

function paperRequirements(copyOfBook1, copyOfBook2, copyOfBook3) {
    const firstBookTotalPaper = 100 * copyOfBook1;
    const secondBookTotalPaper = 200 * copyOfBook2;
    const thirdBookTotalPaper = 300 * copyOfBook3;

    let totalPaperRequired = firstBookTotalPaper + secondBookTotalPaper + thirdBookTotalPaper;

    return totalPaperRequired;

}

let pageRequired = paperRequirements(2, 3, 4);
// console.log('You need total', pageRequired, 'pages.');

/**************************************************************************/

// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

/* Answer */
function bestFriend(friendArray) {
    // let biggestLength = friendArray[0].length;
    let longest = friendArray[0];
    for (i = 0; i < friendArray.length; i++) {
        let element = friendArray[i]
        if (element.length > longest.length) {
            longest = element;
        }
    }
    return longest;

    /* or */

    // var longest = friendArray.sort(
    //     function (a, b) {
    //         return b.length - a.length;
    //     }
    // )[0];
    // return longest;

    /* or */

    // var longest = friendArray.reduce(
    //     function (a, b) {
    //         return a.length > b.length ? a : b;
    //     }
    // );
    // return longest;
}



let friends = ['kamal', 'mozahid', 'mushfiqur rahman', 'shihan', 'tasmia', 'mostafizur'];
let bigName = bestFriend(friends);
// console.log(bigName, 'has the highest number of charecters');

/**************************************************************************/

// এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

/* Answer */
function onlyPositive(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        let element = array[i];
        if (element < 0) { break; }
        newArray.push(element);
    }
    return newArray;
}

let array = [12, 2, 3, -455, 434, 54, 6, 5, -34, -23, 34, 45, 67, 12]
let positiveArray = onlyPositive(array);
console.log(positiveArray);