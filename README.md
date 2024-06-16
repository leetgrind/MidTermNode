## Midterm

You are writing a software for a restaurant 🍽️

You are given a list of orders. Your goal is to write a program in nodejs to cook and prepare the orders.

An item in an order is represented by an object
```
item = {
    name: 'Name of the Item',
    symbol: '🍔',
    timeToPrepare: timeTakenInMilliseconds
    }

For example
    const burger = {
    name: 'Burger',
    symbol: '🍔',
    timeToPrepare: 3000
    }
```
An order is represented by a collection of items:

```
[
    burger, fries, soda
]
```
An order can only be ready if all of the items in an order are ready. So in the above example order is considered ready when *Burger, Fries and Soda* are available.

Items are provided in the main.js file

The `allItems` array represents the list of all the items which a customer can order

You are given a list of orders. You have to process the orders in an efficient manner

An example order list looks like:

```
// 2D array representing Orders
[
    [burger, sandwich, fries, soda], // Index 0, Order 0
    [burger, fries, sandwich], // Index 1, Order 1
    [soda, burger] // Index 2, Order 2
]
```

The expected output should be:

```
// generated with the printGeneratedOrders method. 
Order with ID: 0 generated. Items: 
🍔 - Burger
🥪 - Sandwich
🍟 - Fries
🥤 - Soda
Order with ID: 1 generated. Items: 
🍔 - Burger
🥪 - Sandwich
🍟 - Fries
Order with ID: 2 generated. Items: 
🥤 - Soda
🍔 - Burger

Order 0 : 🥤 prepared // Order number 0 Soda is ready
Order 2 : 🥤 prepared 
Order 0 : 🍟 prepared 
Order 1 : 🍟 prepared 
Order 0 : 🍔 prepared 
Order 1 : 🍔 prepared 
Order 2 : 🍔 prepared 

🚀 Order 2 ready to pickup 🚀 // All the items in Order number 2 are ready so the order is ready

Order 0 : 🥪 prepared 

🚀 Order 0 ready to pickup 🚀

Order 1 : 🥪 prepared 

🚀 Order 1 ready to pickup 🚀
```

You can use the methods available in `main.js` file to create list of orders or you can write your own funtion to do so. 

The function `generateOrders` can generate random orders. For example:

```
// generate three random orders
generateOrders(allItems, 3)
```

The `printGeneratedOrders` method prints details of the generated orders. The first part of the example output above is generated using this method.


You have to implement the function `processOrders` to process the orders list and print the output as shown in the example above. The orders should be processed in an ansynchronous manner. Assume that we have unlimited cooks avaialble for preparing the items.

For simplicity you can use index of the 2D array of orders as order number. However, you can generate an order number as well if you want.

### Important

Make sure you copy the .github folder from this repo to your repo. This folder is required to run the code on github actions. You can verify if the code is running on the github actions tab. The code should start from main.js file else github actions will fail.

Not following this step will result in a 30% penalty.

## Submission Instructions
- Create a private repo. Add my username `leetgrind` to the repo.
- Submit the repo as part of your submission.
- To save time you can submit your repo link at the start of the test.
- Make sure to push changes before the deadline. Any commits after the deadline won't be considered.


