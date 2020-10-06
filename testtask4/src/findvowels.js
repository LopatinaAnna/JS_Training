'use strict'

const findVowels = (str) => {
    if (typeof(str) != 'string')
        return 'Passed argument is not a string';

    if (!str.length)
        return 'String is empty';

    let result = str.match(/[aeiou]/gi);

    return result === null ? 'String does not contain vowels' : result.length;
};

module.exports = findVowels;