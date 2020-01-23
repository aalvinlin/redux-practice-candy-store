# redux-practice-candy-store
Candy Store

# MVP requirements

Use Redux to create and manage a candy store.

1. Employees can create a new candy type to add to the store. Upon creation, 100 pounds of the candy are added to stock.
2. Employees can discontinue a candy type by removing it from the store.
3. Employees can add candies to exisiting stock.
4. Employees can change the unit price of a candy.

5. Shoppers can add and remove candy from their shopping basket. All candy is sold by weight, so shoppers will specify how many pounds of candy they want to add to their basket.
6. The total pounds and total price of the candy in a shopper's basket are updated in real-time.

Initial state object (feel free to populate this with more candy types! Check out your candy from your childhood at https://www.oldtimecandy.com/collections/candy-by-decade ):

```const candyStore = {
    candyTypes: [
        {
            id: 0,
            name: "Smarties",
            stock: 100,
            img: "https://cdn.shopify.com/s/files/1/0004/8132/9204/products/smarties_2_large.jpg?v=1550328122",
            costPerLb: 2
        },
        {
            id: 1,
            name: "Snickers",
            stock: 100,
            img: "http://cdn.shopify.com/s/files/1/0004/8132/9204/products/snickers1.8ox-bar_1_1024x1024.jpg?v=1522356035",
            costPerLb: 8.99
        },
        {
            id: 2,
            name: "Reese's Peanut Butter Cups",
            stock: 100,
            img: "http://cdn.shopify.com/s/files/1/0004/8132/9204/products/reeses_pb_cups_1_1024x1024.jpg?v=1550328137",
            costPerLb: 13.49
        }
        {
            id:3,
            name: 'Fun Dip',
            stock: 100,
            img: 'https://cdn.shopify.com/s/files/1/0004/8132/9204/products/fun-dip_5_large.jpg?v=1522355872',
            costPerLb: 8.25            
        }

        {
            id: 4
            name: "Kinder Chocolate",
            stock: 100,
            img: "https://m.media-amazon.com/images/I/81xa+e3CZeL._AC_UL320_ML3_.jpg".
            costPerLb: 8.49

        }

    ],

    shoppingBasket: {
        candy: [
            {
                id: 0,
                name: "Smarties",
                pounds: 5
            }
        ]
        totalpounds: 5,
        totalCost: 10
    }
}```