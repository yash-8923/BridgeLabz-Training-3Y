// Set the current salary and yearly increment rate.
let salary = 30000;
const annualIncrementRate = 8;
const projection = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * annualIncrementRate / 100;
    salary = Math.round(salary);

    projection.push({
        Year: year,
        Salary: salary
    });
}

console.table(projection);
