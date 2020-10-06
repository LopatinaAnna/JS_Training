'use strict'

const textForRole = (roles, textLines) => {
    let result = '';
    let linesArr = textLines.split('\n');

    for (let i = 0; i < roles.length; i++) {
        result += roles[i] + ':';
        for (let j = 0; j < linesArr.length; j++) {
            if (linesArr[j].includes(roles[i])) {
                result += '\n' + (j + 1) + ')' + linesArr[j].slice(roles[i].length + 1);
            }
        }
        if (i != roles.length - 1)
            result += '\n\n';
    }
    return result;
}

module.exports = textForRole;