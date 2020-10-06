'use strict'

function isBigger(a, b) {
    return a > b;
}

function isSmaller(a, b) {
    return a < b;
}

function getMin(...numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min)
            min = numbers[i];
    }
    return min;
}

function makeNumber(string) {
    return string.replace(/\D/g, '');
}

function countNumbers(string) {
    let result = {};
    let nums = makeNumber(string);
    for (let i = 0; i < nums.length; i++) {
        if (!result[nums[i]])
            result[nums[i]] = 0;
        result[nums[i]]++;
    }
    return result;
}

function pipe(number, ...functions) {
    let previousRes = number;
    for (let i = 0; i < functions.length; i++) {
        previousRes = functions[i](previousRes);
    }
    return previousRes;
}


function isLeapYear(date) {
    let year = new Date(date).getFullYear().toString();
    return isNaN(year) ? 'Invalid Date' :
        ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? `${year} is a leap year` :
        `${year} is not a leap year`;
}


module.exports = {
    isBigger,
    isSmaller,
    makeNumber,
    countNumbers,
    getMin,
    pipe,
    isLeapYear,
};