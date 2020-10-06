'use strict'

const validateTitle = (value) => {
    return typeof(value) != 'string' ? 'Incorrect input data' :
        (value.length <= 2 || value.length > 20 || value[0] == value[0].toLowerCase()) ? 'INVALID' :
        'VALID';
}

const sum = (value1, value2) => {
    let checkDivisible = (number) => (number % 3 == 0 && number % 5 == 0 && number % 15 == 0) ? number * (-1) : number;
    return typeof value1 == 'number' ? (checkDivisible(value1)) + parseInt(value2) :
        (checkDivisible(value2)) + parseInt(value1);
};

module.exports = {
    validateTitle,
    sum,
};