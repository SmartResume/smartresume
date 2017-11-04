export default class Applicant{
    constructor(firstName, lastName, streetAddress, city, postalCode, email, phoneNumber, praiseWords, skillSet){
        this._firstName = firstName,
        this._lastName = lastName,
        this._streetAddress = streetAddress,
        this._city = city,
        this._postalCode = postalCode,
        this._email = email,
        this._phoneNumber = phoneNumber,
        this._praiseWords = praiseWords,
        this._skillSet = skillSet
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        this._firstName = firstName;
    }
    get lastName(){
        return this._firstName
    }
    set lastName(lastName){
        this._lastName = lastName;
    }
    get streetAddress(){
        return this._streetAddress;
    }
    set streetAddress(streetAddress){
        this._streetAddress = streetAddress;
    }
    get city(){
        return this._city;
    }
    set city(city){
        this._city = city;
    }
    get postalCode(){
        return this._postalCode;
    }
    set postalCode(postalCode){
        this._postalCode = postalCode;
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber){
        this._phoneNumber = phoneNumber;
    }
    get praiseWords(){
        return this._praiseWords;
    }
    set praiseWords(praiseWords){
        this._praiseWords = praiseWords;
    }
    get skillSet(){
        return this._skillSet;
    }
    set skillSet(skillSet){
        return this._skillSet;
    }
}

