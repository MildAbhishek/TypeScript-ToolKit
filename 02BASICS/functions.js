"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    // num.toUpperCase() // error
    return num + 5;
    return 'OK'; // no error
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
loginUser('Abhishek', 'xyz@test.com'); // 3rd parameter will be taken by default as true
// return type is not explicit mentioned, so no error
function getMilege(milege) {
    if (milege > 35) {
        return true;
    }
    return '0K';
}
// syntax for arrow function
var calculate = function (s) {
    return 'Calculated';
};
var cars = ['BMW', 'Mercedes', 'Skoda'];
cars.map(function (car) {
    return "car is ".concat(car);
    // return 1 // error
});
// not returning anything
function consoleError(errMsg) {
    console.log(errMsg);
}
// intentional crash, handling exception - return type should be never as per official documentation
function handleError(errMsg) {
    throw new Error(errMsg);
}
