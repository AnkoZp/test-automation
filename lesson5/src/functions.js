// Function that sums elements of an array
function sumArray(arr) {
    return arr.reduce((acc, curr) => {
    // Convert to a number if possible
        const num = Number(curr);
        return isNaN(num) ? acc : acc + num;
    }, 0);
}

// Test arrays
const numbers = [55, 9, 31, 76];
const strings = ['1', '2', '3', 'hello', '4'];

// Call function with numbers
console.log('Sum of numbers:', sumArray(numbers));

// Call function with strings
console.log('Sum of strings (numeric only):', sumArray(strings));
