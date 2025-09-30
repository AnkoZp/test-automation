// Arrow function that sums elements of an array
const sumArray = (arr) =>
    arr.reduce((acc, curr) => {
        const num = Number(curr);
        return isNaN(num) ? acc : acc + num;
    }, 0);

// Test arrays
const numbers = [42, 73, 18];
const strings = ['73', '19', 'JS', '30', 'Test'];

// Call arrow function with numbers
console.log('Sum of numbers:', sumArray(numbers));

// Call arrow function with strings
console.log('Sum of strings (numeric only):', sumArray(strings));
