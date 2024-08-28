// 1. Write a function 'calcTip' that calculates the tip based on the bill value
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
};

// 2. Create an array 'bills' containing the test data
const bills = [125, 555, 44];

// 3. Create an array 'tips' containing the tip value for each bill
const tips = bills.map(bill => calcTip(bill));

// 4. Bonus: Create an array 'total' containing the total values (bill + tip)
const total = bills.map((bill, index) => bill + tips[index]);

// Testing the results
console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", total);