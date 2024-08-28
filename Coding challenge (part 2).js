// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Calculate the average for both teams
const avgDolphinsData1 = calcAverage(44, 23, 71);
const avgKoalasData1 = calcAverage(65, 54, 49);

const avgDolphinsData2 = calcAverage(85, 54, 41);
const avgKoalasData2 = calcAverage(23, 34, 27);

// 3. Create a function 'checkWinner' that takes the average score of each team as parameters
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`);
    } else {
        console.log('No team wins');
    }
};

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
console.log("Data 1:");
checkWinner(avgDolphinsData1, avgKoalasData1);

console.log("Data 2:");
checkWinner(avgDolphinsData2, avgKoalasData2);