// You are given an array representing daily records for a week in a café.
// Each record is an array containing the day of the week, daily sales, and daily expenses.
const weeklyRecords = [
  ["Monday", 300, 150],
  ["Tuesday", 400, 200],
  ["Wednesday", 500, 250],
  ["Thursday", 450, 225],
  ["Friday", 600, 300],
  ["Saturday", 700, 350],
  ["Sunday", 400, 175],
];

/*****************************************************************
Part 1: Sales and Expense Filtering

Task 1) Create a new array containing records for days when sales exceeded $500.
       Output 1) [["Friday", 600, 300], ["Saturday", 700, 350]]

Task 2) Create a new array showing only the expenses for days when expenses were at least $200.
       Output 2) [200, 250, 225, 300, 350]

******************************************************************/

const rainCheck = weeklyRecords.filter((element) => {
  if (element[1] > 500) {
    return true;
  } else {
    return false;
  }
});

console.log(rainCheck);

const badbadday = [];
weeklyRecords.filter((element) => {
  if (element[2] >= 200) {
    badbadday.push(element[2]);
  }
});

console.log(badbadday);

/*****************************************************************
Part 2: Summary Calculations

Task 3) Calculate the total sales for the week.
       Output 3) 3350

Task 4) Calculate the total expenses for the week.
       Output 4) 1650

******************************************************************/

const totSales = 0;

weeklyRecords.forEach((x) => {
  totSales = totSales + x[1];
});

console.log(totSales);

const totalExpenses = 0;

weeklyRecords.forEach((x) => {
  totalExpenses = totalExpenses + x[2];
});

console.log(totalExpenses);

/*****************************************************************
Part 3: Advanced Calculations

Task 5) Calculate the average sales for the week.
       Output 5) 478.57 (rounded to two decimal places)

Task 6) Identify days with net earnings (sales minus expenses) that were above the weekly average net earnings.
       Output 6) [ 'Wednesday', 'Friday', 'Saturday' ]

******************************************************************/

// Note: Use JavaScript array iteration methods such as filter, map, and reduce to achieve the desired output for each task.

console.log(totSales / weeklyRecords.length);


const avgExpenses = totalExpenses/weeklyRecords.length
const aboveAvg = []
weeklyRecords.forEach((element)=>{
  if ((element[1]-element[2])>avgExpenses){
    const aboveAvg.push(element[0])
  }
})

console.log(aboveAvg)