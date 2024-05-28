const removeFromArray = function (arrayToModify, ...valuesToRemove) {
    // splice func
    // findIndex func
    // every func
    for (const huntedValue of valuesToRemove) {
        while (arrayToModify.every(number => number != huntedValue) === false) {
            // let indexNumToRemove = arrayToModify.findIndex(value => value === huntedValue);
            let indexNumToRemove = arrayToModify.indexOf(huntedValue);
            // this function is more appropriate for this use
            arrayToModify.splice(indexNumToRemove, 1);
        }
    
    return arrayToModify
    }

};

removeFromArray([1, 2, 3, 4], 3, 4)

// Do not edit below this line
module.exports = removeFromArray;
