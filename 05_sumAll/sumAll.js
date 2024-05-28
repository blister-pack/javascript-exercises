const sumAll = function(rangeStart, rangeEnd) {


    function checkConditionsToStart(rangeStart, rangeEnd) {
        const conditions = [
            // does not take in negative numbers
            (rangeStart) => rangeStart < 0,
            (rangeEnd) => rangeEnd < 0,
            
            // does not take in non-numbers
            (rangeStart) => isNaN(rangeStart),
            (rangeEnd) => isNaN(rangeEnd),
        ];

        if (conditions.includes(true)) {
            return true;
            // then the main func should return "ERROR"
        }
        return false;
        // then the sum can be calculated


    }
    
};

// Do not edit below this line
module.exports = sumAll;
