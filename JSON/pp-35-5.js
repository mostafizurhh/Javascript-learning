// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 

const car = {
    name: 'Tesla',
    model: 'TS-22',
    price: 12000000,
    isExpensive: true,
    manufacturer: { name: 'Tesla', origin: 'USA', owner: 'Elon Mask' },
    revenueByYear: [23, 34, 56, 78, 123],
    priceRatio: function () {
        const priceIncreaseByYear = this.price * .20;
        const newPrice = this.price + priceIncreaseByYear;
        return newPrice;
    }
}
// console.log(car.priceRatio());
// get all values of nested object manufacturer
const maker = (car.manufacturer);
const values = Object.values(maker);
// console.log(values[2]);

// for in loop
// for (const values in maker) { console.log(values, maker[values]); }

// console.log(car.revenueByYear[3]);
delete car.isExpensive;
// console.log(car);
Object.seal(car);
car.price = 1240000;
car.model = 'TS-30';
Object.freeze(car);
car.price = 12340000;
// console.log(car)
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 
const partOfCar = `${values[0]}, ${car.revenueByYear[2]}, ${car.priceRatio()}`;
// console.log(partOfCar);

// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 
const result = () => 89;
// console.log(result());

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 
const result1 = num1 => num1 / 17;
// console.log(result1(34));

// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 
const result2 = (num1, num2) => (num1 + num2) / 2;
// console.log(result2(5, 3));

// ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
const result3 = (num1, num2) => {
    const num3 = num1 + 7;
    const num4 = num2 + 7;
    const num5 = num3 + num4;
    return num5;
}
// console.log(result3(2, 4));

// ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
const numArray = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70].map(x => x / 7);
// console.log(numArray); 

// ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
const arrayMethodsSummary = `
map = will take all elements of an array, do some function with those, save the result in an array and finally return the new array. 
syntax: newArray = [array].map(x=>x/2); x = variable name, x/2 = a function

forEach = will take all elements of an array, do some function with those, save the result in an array but will not return the new array. 
syntax: const numbers = [array], numbers.forEach(number=>number/2);

filter: will return only those values of the array which matches with the condition.
syntax: [array].filter(x=>x/2);

find: will return only the first element for the matching condition from the given array.
syntax: [array].find(x=>x/3);
`
// console.log(arrayMethodsSummary);

// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
/* object destructuring (variable name should be same as property name and must keep within curly bracket)*/
const { name, model, price } = car;
// console.log(model);

/* array destructuring (variable name could be anything but variable names must be kept within 3rd bracket.variables will take the values from the array chronologically) */
const num = [1, 2, 3, 4, 5];
const [previousBalance, balance] = num;
// console.log(balance);