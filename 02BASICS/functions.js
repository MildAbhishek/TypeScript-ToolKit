"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    // num.toUpperCase() // error
    return num + 2;
}
add(5);
// add('5') // error
var name;
function getUpperCase(val) {
    return val.toUpperCase();
}
name = getUpperCase('abhishek');
function signUp(name, email, isPaid) {
    return 'SignUp User';
}
signUp('Abhishek', 'xyz@test.com', true);
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return 'Login User';
}
loginUser('Abhishek', 'xyz@test.com');
function getMilege() {
}
