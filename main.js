const burger = {
    name: 'Burger',
    symbol: '🍔',
    timeToPrepare: 3000
}

const soda = {
    name: 'Soda',
    symbol: '🥤',
    timeToPrepare: 1000
}

const fries = {
    name: 'Fries',
    symbol: '🍟',
    timeToPrepare: 2000
}

const sandwich = {
    name: 'Sandwich',
    symbol: '🥪',
    timeToPrepare: 4000
}

const coffee = {
    name: 'Coffee',
    symbol: '☕️',
    timeToPrepare: 500
}

const allItems = [burger, soda, fries, sandwich]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getRandomOrder (list, number) {
    return list.sort(() => 0.5 - Math.random()).slice(0, number);
}

function generateOrders(allItems, numberOfOrders) {
    let orders = []

    for(let i=0; i<numberOfOrders; i++){
        orders.push(getRandomOrder(allItems, getRandomInt(allItems.length)+1))
    }

    return orders;
}

function printGeneratedOrders(orderList) {
    orderList.map((order, index) => {
        console.log(`Order with ID: ${index} generated. Items: `);
        order.map(item => console.log(`${item.symbol} - ${item.name}`))
    });
}

// implement this method
function processOrders(ordersList) {
    orderList.map((order, idx) => console.log(`Order Id: ${idx} processed`))
}

orderList = generateOrders(allItems, 3);
printGeneratedOrders(orderList);

processOrders(orderList);
