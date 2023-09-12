// var global scope
var customerName = 'bob';
// const global scope
const leastFavoriteCustomer = 'smob';

// fn uppercases customerName
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
} 

// fn declare var global scope
// assign value to undeclared variable => global variable
function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
} 

// overwrite bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

// try to change const
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'swob';
    return leastFavoriteCustomer;
}  