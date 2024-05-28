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
    
};

// Do not edit below this line
module.exports = sumAll;
