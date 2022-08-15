//1. find the cheapest phone from the given array.

const phones = [
    { name: 'iPhone', camera: '13mp', storage: '256gb', color: 'ocean blue', price: 82000 },
    { name: 'Samsung', camera: '18mp', storage: '256gb', color: 'purple', price: 62000 },
    { name: 'Huwai', camera: '32mp', storage: '256gb', color: 'black', price: 72000 },
    { name: 'Xaomi', camera: '48mp', storage: '256gb', color: 'cool green', price: 52000 },
    { name: 'Nokia', camera: '16mp', storage: '256gb', color: 'royal blue', price: 58000 },
    { name: 'HTC', camera: '20mp', storage: '256gb', color: 'sky blue', price: 68000 },
    { name: 'Sony', camera: '24mp', storage: '256gb', color: 'hot pink', price: 69000 },
]

function cheapestPhone(Phones) {
    let cheapPhone = Phones[0];
    for (let i = 0; i < Phones.length; i++) {
        let element = Phones[i];
        if (element.price < cheapPhone.price) {
            cheapPhone = element;
        }
    }
    return cheapPhone;
}

let CheapestPhone = cheapestPhone(phones);
// console.log('The cheapest phone is:', CheapestPhone);  

/***********************************/

// 2. Find the total cost from the given array.

// let myCart = [
//     { name: 'shirt', price: 2000 },
//     { name: 'pant', price: 2500 },
//     { name: 'shoe', price: 3200 },
//     { name: 'belt', price: 800 }
// ]

// function totalCost(cart) {
//     let sum = 0;
//     for (i = 0; i < cart.length; i++) {
//         element = cart[i];
//         sum = sum + element.price;
//     }
//     return sum;
// }

// let TotalCost = totalCost(myCart);
// console.log('Total cost is:', TotalCost);

/***********************************/

// 3. Find total cost of all items.
// let myCart = [
//     { name: 'shirt', price: 2000, quantity: 4 },
//     { name: 'pant', price: 2500, quantity: 2 },
//     { name: 'shoe', price: 3200, quantity: 3 },
//     { name: 'belt', price: 800, quantity: 2 }
// ]

// function totalCost(cart) {
//     let sum = 0;
//     for (i = 0; i < cart.length; i++) {
//         let element = cart[i];
//         let productTotal = element.price * element.quantity;
//         sum = sum + productTotal;
//     }
//     return sum;
// }

// let TotalCost = totalCost(myCart);
// console.log('Total cost is:', TotalCost);

/***********************************/

// 4. Find total price after discount.
// let myCart = [
//     { name: 'shirt', price: 2000, quantity: 4, discount: .25 },
//     { name: 'pant', price: 2500, quantity: 2, discount: .15 },
//     { name: 'shoe', price: 3200, quantity: 3, discount: .20 },
//     { name: 'belt', price: 800, quantity: 2, discount: .05 }
// ]

// function totalCost(cart) {
//     let sum = 0;
//     for (i = 0; i < cart.length; i++) {
//         let element = cart[i];
//         let productPrice = (element.price - (element.price * element.discount));
//         let productTotal = productPrice * element.quantity;
//         sum = sum + productTotal;
//     }
//     return sum;
// }

// let TotalCost = totalCost(myCart);
// console.log('Total cost is:', TotalCost);

/***********************************/

// 5. You want to buy some lottery tickets from a shop. You asked the price and shopkeeper said for 1st 10 tickets price is 150/ticket, for 10 to 15 price is 150/ticket for 1st 10 and rest is 130/ticket, for 15 to 20 price is 110/ticket and up to 15 the price i mentiond before, for more than 20 tickets price is 90/ticket and don't forget all the price i mentioned before for up to 20 tickets. Now, write a program to calculate the total money you need to buy random number of tickets.

/* Solution 5: */
function totalPrice(tickets) {
    const first10Price = 150;
    const tenTo15Price = 130;
    const fifteento20Price = 110;
    const moreThan20Price = 90;

    if (tickets <= 10) { let total = first10Price * tickets; return total; }
    else if (tickets > 10 && tickets <= 15) {
        let first10Total = first10Price * 10;
        let restTotal = tenTo15Price * (tickets - 10);
        let total = first10Total + restTotal;
        return total;
    }
    else if (tickets > 15 && tickets <= 20) {
        let first10Total = first10Price * 10;
        let tenTo15Total = tenTo15Price * 5;
        let restTotal = fifteento20Price * (tickets - 15);
        let total = first10Total + tenTo15Total + restTotal;
        return total;
    }
    else {
        let first10Total = first10Price * 10;
        let tenTo15Total = tenTo15Price * 5;
        let fifteento20Total = fifteento20Price * 5;
        let restTotal = moreThan20Price * (tickets - 20);
        let total = first10Total + tenTo15Total + fifteento20Total + restTotal;
        return total;
    }

}

let ticket = 25;
let totalCostOfTickets = totalPrice(ticket);
// console.log('Total price will be:', totalCostOfTickets);


/***********************************/
/* 6. Find element based on condition */

let mobiles = [
    { name: 'iPhone', camera: '13mp', storage: '256gb', color: 'ocean blue', price: 82000 },
    { name: 'Samsung', camera: '18mp', storage: '256gb', color: 'purple', price: 62000 },
    { name: 'Huwai', camera: '32mp', storage: '256gb', color: 'Blue', price: 72000 },
    { name: 'Xaomi', camera: '48mp', storage: '256gb', color: 'cool green', price: 52000 },
    { name: 'Nokia', camera: '16mp', storage: '256gb', color: 'royal blue', price: 58000 },
    { name: 'HTC', camera: '20mp', storage: '256gb', color: 'sky Blue', price: 68000 },
    { name: 'Sony', camera: '24mp', storage: '256gb', color: 'hot pink', price: 69000 },
]

function matchedProducts(mobiles, search) {

    let matchString = [];
    for (let mobile of mobiles) {
        if (mobile.color.toLowerCase().includes(search.toLowerCase())) {
            matchString.push(mobile);
        }
    }
    return matchString;
}

let result = matchedProducts(mobiles, 'blue');
console.log(result);