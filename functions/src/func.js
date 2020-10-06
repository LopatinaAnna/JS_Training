'use strict'

const getSum = (str1, str2) => {
    let check = (str) => (typeof str == 'string') && (str == str.replace(/\D/g, ''));

    if (!check(str1) && !check(str2))
        return false;

    let count = Math.max(str1.length, str2.length);
    let result = Array(count);
    let d = 0;

    str1 = str1.padStart(count, 0)
    str2 = str2.padStart(count, 0)

    for (let i = count - 1; ~i; --i) {
        if ((result[i] = d + +str1[i] + +str2[i]) > 9) {
            d = 1;
            result[i] -= 10;
        } else
            d = 0;
    }
    return d ? result.unshift(1).join('') : result.join('');
};

const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
    let post = 0;
    let comments = 0;

    for (let i in listOfPosts) {
        if (listOfPosts[i].author == authorName)
            post++;
        for (let j in listOfPosts[i].comments)
            if (listOfPosts[i].comments[j].author == authorName)
                comments++;
    }
    return `Post:${post},comments:${comments}`;
};

const tickets = (people) => {
    let cash = 0;
    for (let i in people) {
        if (people[i] > 25 && people[i] > (cash + 25))
            return 'NO';
        cash += 25;
    }
    return 'YES';
};


module.exports = { getSum, getQuantityPostsByAuthor, tickets };