// Variables of different types
const num = 4;
const str = '4';
const bool = true;

// Comparison operators
console.log('num == str:', num == str);   // true (loose comparison)
console.log('num === str:', num === str); // false (strict comparison)
console.log('num != str:', num != str);   // false
console.log('num !== str:', num !== str); // true
console.log('num > 3:', num > 3);         // true

// Logical operators
console.log('num > 3 && bool:', num > 3 && bool); // true
console.log('num < 3 || bool:', num < 3 || bool); // true
console.log('!bool:', !bool);                     // false
