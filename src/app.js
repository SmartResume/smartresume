import Applicant from './classes/Applicant.js';

const user = new Applicant('John', 'Lennon', 'Abbey Road', 'London', '00001', 'walrus@gmail.com', '123455', 'cool dude', '')
console.log(user.email);
user.email = 'asd@gmail.com';
console.log(user.email);
/**
* Applicant: (firstName, lastName, streetAddress, city, postalCode, email, phoneNumber, praiseWords, skillSet)
*/
const style = require('./app.css')
console.log('Hello from app.js')
