const age = 20;
const hasTicket = true;

// if
console.log('if condition:');
if (age >= 18) {
    console.log('Access allowed: adult.');
}

// if-else if-else
console.log('if-else if-else condition:');
if (age < 12) {
    console.log('Category: child.');
} else if (age >= 12 && age < 18) {
    console.log('Category: teen.');
} else if (age >= 18 && hasTicket) {
    console.log('Category: adult with ticket.');
} else {
    console.log('Access restricted.');
}
