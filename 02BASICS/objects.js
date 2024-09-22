"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'Abhishek',
    email: 'abhishek@abhishek.com',
    isActive: true
};
// function accepting object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'Abhishek', isPaid: true });
// createUser({name:'Abhishek', isPaid: true, email:'a@a.com'}) // error
var customer = { name: 'Abhishek', isPaid: true, email: 'a@a.com' };
// createUser(customer) // no error, so not all wierdness of JS is gone
// function returning generic object
function createCar() {
    return { name: '' };
}
// function returning specific object
function createCourse() {
    return { name: 'TypeScript Toolkit', price: 999 };
}
function insertUser(user) {
    return { name: '', email: '', isActive: true };
}
insertUser({ name: '', email: '', isActive: true });
