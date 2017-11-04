export default class Employee{
    constructor(companyName, personnelFirstName, personnelLastName, personnelPhoneNumber, personnelEmail, streetAddres, city, postalCode){
        this._companyName = companyName;
        this._personnelFirstName = personnelFirstName;
        this._personnelLastName = personnelLastName;
        this._personnelPhoneNumber = personnelPhoneNumber;
        this._personnelEmail = personnelEmail;
        this._streetAddres = streetAddres;
        this._city = city;
        this._postalCode = postalCode;
    }
}
/**
 * Employee: (companyName, personnelFirstName, personnelLastName, streetAddress, city, postalCode ...) 
 */