function isLeapyear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log('It is a leap year');
        return true;
    }
    else {
        console.log('It is not a Leap Year');
        return false;
    }
}
var leapYear = isLeapyear(1952);
console.log(leapYear);