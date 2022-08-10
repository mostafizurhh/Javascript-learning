function sefEntry(step1, step2, step3, step4) {
    console.log('kisu kaj korte hobe');
    // console.log(step1, step2, step3, step4);
}
var sns = '4. medical number'

sefEntry('1. legal entry', '2. NIF, NISS', '3. Job Contract', sns)

function addNumbers(num1, num2, num3) {

    var sum = num1 + num2 + num3;
    // console.log(sum);
}

addNumbers(10, 20, 30)

function bringBazar(money) {
    var aluPrice = 20;
    var telPrice = 220;
    var peajPrice = 50;
    var morichPrice = 80;

    var totalKhoroch = aluPrice + telPrice + peajPrice + morichPrice;
    var remainingMoney = money - totalKhoroch;

    return remainingMoney;
}

var amarTaka = 500;
var taka = bringBazar(amarTaka);
// console.log('amar kase thaklo:', taka);


