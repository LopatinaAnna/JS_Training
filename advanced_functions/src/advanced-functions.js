//=============================================
// ------------------------------------ TASK №1
//=============================================
const cache = (func) => {
    let cache = {};
    return (...args) => {
        let arg1 = args[0];
        let arg2 = args[1];
        if ((arg1, arg2) in cache) {
            return cache[(arg1, arg2)];
        } else {
            let result = func(arg1, arg2);
            cache[(arg1, arg2)] = result;
            return result;
        }
    }
}

//=============================================
// ------------------------------------ TASK №2
//=============================================
const forwardBackwardSteps = {
    step: 0,
    forward: function() {
        this.step++;
        return this;
    },
    backward: function() {
        this.step--;
        return this;
    },
    revealStep: function() {
        console.log(this.step);
        return this;
    }
}

//=============================================
// ------------------------------------ TASK №3
//=============================================
const applyAll = (func, ...args) => func(...args);

const sum = (...args) => {
    let result = 0;
    for (let i in args)
        result += args[i];
    return result;
}

const mul = (...args) => {
    let result = 1;
    for (let i in args)
        result *= args[i];
    return result;
}

//=============================================

module.exports = { cache, forwardBackwardSteps, applyAll, sum, mul }