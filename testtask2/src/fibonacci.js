'use strict'

const fibonacciNumbers = (num) => {
    return !Number.isInteger(num) ? 'Passed argument is not a number' :
        num < 1 ? 0 :
        num <= 2 ? 1 :
        fibonacciNumbers(num - 1) + fibonacciNumbers(num - 2);
};
module.exports = fibonacciNumbers;