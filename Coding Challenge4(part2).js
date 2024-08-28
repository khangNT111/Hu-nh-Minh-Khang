// 1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Function to calculate tip based on the bill amount
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
};

// 2. Create empty arrays for tips and totals
const tips = [];
const totals = [];

// 3. Use a for loop to calculate tips and total values
for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    const tip = calcTip(bill);
    tips.push(tip);
    totals.push(bill + tip);
}

// 4. Bonus: Write a function 'calcAverage' to calculate the average of an array
const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

// Call the function with the 'totals' array
const averageTotal = calcAverage(totals);

// Log results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);
console.log('Average Total:', averageTotal.toFixed(2));