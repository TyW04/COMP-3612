/* add code below this */
const billTotals = [50, 150, 20, 500, 60, 98, 34];
const tips = [];
let tipPercentage = 0;
for (let total of billTotals) {
    if (total > 75) {
        tipPercentage = 0.10;
    } else if (total >= 30) {
        tipPercentage = 0.20;
    } else if (total < 30) {
        tipPercentage = 0.30;
    }

    const tipAmount = total * tipPercentage;
    tips.push(tipAmount);
}

for (let i = 0; i < billTotals.length; i++) {
    const billAmount = billTotals[i];
    const billTip = tips[i];
    console.log(`For bill of \$${billAmount} the tip should be \$${billTip.toFixed(2)}`);
}