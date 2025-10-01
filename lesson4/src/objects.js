const user = {
    firstName: 'Anastasiia',
    lastName: 'Panchenko',
    age: 28,
    contact: {
        email: 'test.email@example.com',
        phone: '+123456789'
    },
    hobbies: ['fencing', 'gaming', 'traveling'],
    greet: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    },
    showHobbies: function () {
        console.log('My hobbies are:');
        this.hobbies.forEach(hobby => console.log('- ' + hobby));
    }
};

user.greet();
user.showHobbies();
