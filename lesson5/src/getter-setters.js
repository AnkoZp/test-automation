// Object with getters and setters
const user = {
    firstName: 'Anastasiia',
    lastName: 'Panchenko',
    age: 28,
    contact: {
        email: 'test.email@example.com',
        phone: '+123456789'
    },

    // Getter for full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Setter for full name
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0] || '';
        this.lastName = parts[1] || '';
    },

    // Method: returns summary info
    summary() {
        return `User: ${this.fullName}, Age: ${this.age}, Email: ${this.contact.email}`;
    }
};

// Using getter
console.log('Full name:', user.fullName);

// Using setter
user.fullName = 'Nastya Tester';
console.log('After setter → Full name:', user.fullName);

// Using method
console.log('Summary:', user.summary());
