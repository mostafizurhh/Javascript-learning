// P1. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

// solution:

// var myMoney = 70000;
// var macPrice = 80000;
// var gamingLaptopPrice = 60000;
// var lenovoYogaPrice = 40000;
// var puranLaptopPrice = 20000;

// if (myMoney >= macPrice) { console.log('Mac kinbo'); }
// else if (myMoney >= gamingLaptopPrice) { console.log('Gaming laptop kinbo'); }
// else if (myMoney >= lenovoYogaPrice) { console.log('Lenevo yogo kinbo'); }
// else if (myMoney >= puranLaptopPrice) { console.log('Puran laptop kinbo'); }
// else { console.log('mobile dea kaj chalabo'); }

/****************************************************************/

// P2. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

// Solution 2:

// var i = 1;
// while (i < 40) { console.log('আসকে আমার মন ভালো নেই'); i++; }

/****************************************************************/

// P3. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও.
/* Solution 3 *
for (var i = 58; i <= 98; i++) { console.log(i); }/

/****************************************************************/

// P4. একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও.

/* Solution 4:
for (var i = 412; i <= 456; i += 2) { console.log(i); } */

/****************************************************************/
// P5. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও.

/* Solution 5:
for (var i = 581; i <= 623; i += 2) { console.log(i); } */

/****************************************************************/
// P6. তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

/* Solution 6:
var myLearnings = ['html', 'css', 'bootstrap', 'tailwind', 'idea about web-design', 'javascript', 'variable', 'mathematic operation', 'comparison', 'condition', 'for loop', 'while loop', 'array', 'if', 'else', 'else if', 'github', 'netlify'];

for (var i = 0; i < myLearnings.length; i++) {
    var myLearning = myLearnings[i];
    console.log(myLearning);
} */

/****************************************************************/

// P7. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

// Solution 7:

// var myUsedMobiles = ['Semiens', 'LG', 'unknown', 'Samsung', 'Walton', 'China', 'Nova 2i', 'Apple'];
// let i = 0;
// while (i < myUsedMobiles.length) {
//     var myUsedMobile = myUsedMobiles[i];
//     i++;
//     // if (myUsedMobile == myUsedMobiles[2]) { continue; };
//     console.log(myUsedMobile);
// };

// for (i = 0; i < myUsedMobiles.length; i++) {
//     var myUsedMobile = myUsedMobiles[i];
//     console.log(myUsedMobile);
// };

/****************************************************************/
// P8. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

/* Solution 8: 

for (var i = 30; i <= 86; i++) {
    if (i == 45) { break; };
    console.log(i);
} */

/****************************************************************/

// P9. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 

/* Solution 9:*/

var myBookPrices = [234, 137, 273, 475, 553, 227, 220, 50, 129, 89, 25, 175, 179, 197];

// let i = 0;

// while (i < myBookPrices.length) {
//     var myBookPrice = myBookPrices[i];
//     i++;
//     if (myBookPrice > 200) { continue; };
//     console.log(myBookPrice);
// }

for (i = 0; i < myBookPrices.length; i++) {
    var myBookPrice = myBookPrices[i];
    if (myBookPrice > 200) { continue; };
    console.log(myBookPrice);
}