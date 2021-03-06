'use strict'

function convert() {
    return Array.from(arguments).map(el => (typeof el === 'string') ? parseInt(el) : (el + ''));
}

const executeforEach = (array, func) => {
    return array.forEach(el => func(el));
};

const mapArray = (array, func) => {
    return array.map(el => func(parseInt(el)));
};

const filterArray = (array, func) => {
    return array.filter(el => func(el));
};

const flipOver = (str) => {
    return str.split('').reverse().join('');
};

const makeListFromRange = (array) => {
    let result = [];
    for (let i = array[0]; i <= array[1]; i++) {
        result.push(i);
    }
    return result.length == 0 ? array : result;
};

const getArrayOfKeys = (object, k) => {
    let result = [];
    for (let item in object) {
        for (const [key, value] of Object.entries(object[item])) {
            if (key == k)
                result.push(value);
        }
    }
    return result;
};

const substitute = (array) => {
    return mapArray(array, function(el) { return el >= 30 ? el : '*' });
};

const getPastDay = (date, days) => {
    let result = date.getDate() - days;
    return result == 0 ? 31 : result < 0 ? result + 365 : result;
};

const formatDate = (date) => {
    let result = new Date((date.getTime() - date.getTimezoneOffset() * 60000));
    return result.toISOString().slice(0, 16).replace('T', ' ').replace(/-/g, '/');
};

module.exports = {
    convert,
    executeforEach,
    mapArray,
    filterArray,
    flipOver,
    makeListFromRange,
    getArrayOfKeys,
    substitute,
    getPastDay,
    formatDate,
};
