'use strict'

const detectPalindrome = (str) => {
    if (!(typeof(str) == 'string'))
        return 'Passed argument is not a string';

    if (!str.length)
        return 'String is empty';

    let arr = Array.from(str.toLocaleLowerCase());

    return arr.toString() === arr.reverse().toString() ?
        'This string is palindrome!' : 'This string is not a palindrome!';
};

module.exports = detectPalindrome;