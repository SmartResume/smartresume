const style = require('./app.css')
import Applicant from './classes/Applicant.js';

const user = new Applicant('John', 'Lennon', 'Abbey Road', 'London', '00001', 'walrus@gmail.com', '123455', 'cool dude', '')
user.email = 'asd@gmail.com';
console.log(user.getEmail());
/**
* Applicant: (firstName, lastName, streetAddress, city, postalCode, email, phoneNumber, praiseWords, skillSet)
*/
console.log('Hello from app.js')
