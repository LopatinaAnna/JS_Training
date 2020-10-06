'use strict'

const evenNumbersInArray = (array) => {
    if (!Array.isArray(array) || !array.length)
        return 'Passed argument is not an array or empty';

    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0)
            arr.push(array[i]);
    }

    return arr.length == 0 ? 'Passed array does not contain even numbers' : arr;
};

module.exports = evenNumbersInArray;