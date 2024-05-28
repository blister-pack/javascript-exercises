const sumAll = function(rangeStart, rangeEnd) {

    function checkConditionsToStart() {
        const conditions = [
            // does not take in negative numbers
            () => rangeStart < 0,
            () => rangeEnd < 0,
            
            // does not take in non-numbers
            () => isNaN(rangeStart),
            () => isNaN(rangeEnd),
        ];

        for (const condition of conditions) {
            if (condition()) {
                return true;
                // then the main func should return "ERROR"
        }
        }
        return false;
        // then the sum can be calculated
    }
    if (checkConditionsToStart() === true) {
        return "ERROR";
    }

    if (rangeStart > rangeEnd) {
        [rangeStart, rangeEnd] = [rangeEnd, rangeStart];
    }

    let sum = 0;
    for (let index = rangeStart; index <= rangeEnd; index++) {
        sum += index;
    }

    return sum
    
};

sumAll(1, -4)

// Do not edit below this line
module.exports = sumAll;
