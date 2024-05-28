const sumAll = function(rangeStart, rangeEnd) {

    function checkConditionsToStart() {
        const conditions = [
            // does not take in negative numbers
            (negativeStart) => rangeStart < 0,
            (negativeEnd) => rangeEnd < 0,
            
            // does not take in non-numbers
            (isNumberStart) => isNaN(rangeStart),
            (isNumberEnd) => isNaN(rangeEnd),
        ];

        if (conditions.includes(true)) {
            return true;
            // then the main func should return "ERROR"
        }
        return false;
        // then the sum can be calculated
    }
    if (checkConditionsToStart() === true) {
        return "ERROR";
    }

    if (rangeEnd > rangeStart) {
        [rangeStart, rangeEnd] = [rangeEnd, rangeStart];
    }

    let sum = 0;
    for (let index = rangeStart; index <= rangeEnd; index++) {
        sum += index;
    }

    return sum
    
};

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
