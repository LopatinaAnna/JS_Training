'use strict'

const evenNumbersInArray = (array) => {
    if (!Array.isArray(array) || !array.length)
        return 'Passed argument is not an array or empty';

    let result = array.filter((item) => item % 2 == 0);

    return result.length == 0 ? 'Passed array does not contain even numbers' : result;
};

module.exports = evenNumbersInArray;
