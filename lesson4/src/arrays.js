// Array of strings
const strings = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Array of numbers
const numbers = [42, 87, 15, 91, 28];

// Boolean array
const booleans = [true, false, true, false, true];

// Array any (various types)
const mixed = ['hello', 53, false, { key: 'value' }];

// ---------------------- forEach() ----------------------
strings.forEach((item, index) => {
    console.log(`strings[${index}] = ${item}`);
});

numbers.forEach(num => {
    console.log('a * 2:', num * 2);
});

// ---------------------- map() ----------------------
const upperStrings = strings.map(str => str.toUpperCase());
console.log('Capital letters:', upperStrings);

const expNumbers = numbers.map(num => num * num);
console.log('Exponentiation:', expNumbers);

const invertedBooleans = booleans.map(b => !b);
console.log('Inverted values:', invertedBooleans);

const typeInfo = mixed.map(el => typeof el);
console.log('Element types:', typeInfo);

// ---------------------- filter() ----------------------
// Select lines starting with 'T'
const tStrings = strings.filter(str => str.startsWith('T'));
console.log('Rows on T:', tStrings);

// ВChoose numbers greater than 50
const bigNumbers = numbers.filter(num => num > 50);
console.log('Num > 50:', bigNumbers);

// ---------------------- find() ----------------------
// First number is less than 25
const foundNumber = numbers.find(num => num < 25);
console.log('First number < 25:', foundNumber);

// First line is longer than 7 characters
const foundString = strings.find(str => str.length > 7);
console.log('First string line > 7 characters:', foundString);

// ---------------------- sort() ----------------------
// Sort strings alphabetically
const sortedStrings = [...strings].sort();
console.log('Sorted strings:', sortedStrings);

// Sort numbers ascending
const sortedNumbersAsc = [...numbers].sort((a, b) => a - b);
console.log('Numbers ↑:', sortedNumbersAsc);

// Sort numbers descending
const sortedNumbersDesc = [...numbers].sort((a, b) => b - a);
console.log('Numbers ↓:', sortedNumbersDesc);
