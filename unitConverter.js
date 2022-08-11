function inchToFeet(inch) {
    const feet = inch / 12;
    return feet.toFixed(2);
}
var feet = inchToFeet(18);
// console.log('The unit is:', feet, 'ft');

function cmToFeet(cm) {
    const feet = cm / 30.48;
    return feet.toFixed(3);
}
var feet = cmToFeet(154);
// console.log('The unit is:', feet, 'ft');

function feetToCm(feet) {
    const cm = feet * 30.48;
    return cm.toFixed(3);
}
var cm = feetToCm(5.6);
// console.log('The unit is:', cm, 'cm');

function feetToMeter(feet) {
    const meter = feet / 3.281;
    return meter.toFixed(3);
}
var meter = feetToMeter(1);
// console.log('The unit is:', meter, 'm');

function meterToFeet(meter) {
    const feet = meter * 3.281;
    return feet.toFixed(3);
}
var feet = meterToFeet(1);
// console.log('The unit is:', feet, 'ft');

function inchToCm(inch) {
    const cm = inch * 2.54;
    return cm.toFixed(3);
}
var cm = inchToCm(66);
// console.log('The unit is:', cm, 'cm');

function mileToKm(miles) {
    const km = miles * 1.6094;
    return km.toFixed(3);
}
var km = mileToKm(1);
console.log('The unit is:', km, 'km');

