// array of items that were ordered
const orderItems = [
    { dishName: "Grilled Salmon with Herbs", dishAmount: 28.50 },
    { dishName: "Caesar Salad", dishAmount: 14.75 },
    { dishName: "Mushroom Risotto", dishAmount: 22.00 },
    { dishName: "Beef Tenderloin", dishAmount: 35.00 },
    { dishName: "Garlic Bread", dishAmount: 8.50 },
    { dishName: "Chocolate Lava Cake", dishAmount: 12.25 },
    { dishName: "House Red Wine", dishAmount: 18.00 },
    { dishName: "Sparkling Water", dishAmount: 4.50 }
];

const taxRate = prompt("Enter a tax percentage number");
let iTax = Number(taxRate);
if (!iTax) iTax = 0;
const tipRate = prompt("Enter a tip percentage number");
let iTip = Number(tipRate);
if (!iTip) iTip = 0;

console.log(iTax, iTip);

/* add code below this */

/* create function that calculates the subtotal, tax amount, tip amount, and total 
   and returns an object with the four calculated values */
function billCalculations(orderItemsList, taxRate, tipRate) {
    let subtotal = 0;
    
    for (let orderItem of orderItemsList) {
        subtotal += orderItem.dishAmount; 
    }
    let taxAmount = subtotal * taxRate / 100;
    let tipAmount = subtotal * tipRate / 100;
    let total = subtotal + taxAmount + tipAmount;

    return {
        subtotal: subtotal.toFixed(2),
        tax: taxAmount.toFixed(2),
        tip: tipAmount.toFixed(2),
        total: total.toFixed(2)};
}

/* create function that outputs a single order item */
function outputOrderItem(orderItem) {
    document.write(`
        <div class="order-item">
            <span class="dish-name">${orderItem.dishName}</span>
            <span class="dish-price">$${(orderItem.dishAmount).toFixed(2)}</span>
        </div>`);
}

/* create function that outputs all the order items */
function outputOrders(orderItemsArr) {
    for (let orderItem of orderItemsArr) {
        console.log(orderItem.dishName);
        outputOrderItem(orderItem);
    }
}

/* create function that outputs a bill row */
function outputBillRow(billLabel, billValue) {
    document.write(`
        <div class="bill-row">
            <span class="bill-label">${billLabel}</span>
            <span class="bill-value">${billValue}</span>
        </div>
        `);
}

/* create function that outputs all the bill rows */
function outputBill(order) {
    const calculations = billCalculations(order, iTax, iTip);

    document.write(`
        <div class="bill-row">
            <span class="bill-label">Items Ordered:</span>
            <span class="bill-value">${order.length}</span>
        </div>
        <div class="bill-row">
            <span class="bill-label">Subtotal:</span>
            <span class="bill-value">$${calculations.subtotal}</span>
        </div>
        <div class="bill-row">
            <span class="bill-label">Tax: (${iTax}%)</span>
            <span class="bill-value">$${calculations.tax}</span>
        </div>
        <div class="bill-row">
            <span class="bill-label">Tip: (${iTip}%)</span>
            <span class="bill-value">$${calculations.tip}</span>
        </div>
        <div class="bill-row">
            <span class="bill-label">Total:</span>
            <span class="bill-value">$${calculations.total}</span>
        </div>
        `);
}
