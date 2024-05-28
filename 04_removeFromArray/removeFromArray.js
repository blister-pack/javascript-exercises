const removeFromArray = function (arrayToModify, ...valuesToRemove) {
    // splice func
    // findIndex func
    // every func
    for (const huntedValue of valuesToRemove) {
        while (arrayToModify.every(number => number != huntedValue) === false) {
            let indexNumToRemove = arrayToModify.findIndex(value => value === huntedValue);
            arrayToModify.splice(indexNumToRemove, 1);
        }
    
    return arrayToModify
    
        // for (const arrayNumToCompare of arrayToModify) {
        //     if (huntedValue === arrayNumToCompare) {

        //     }
        // }
        
    }

};

// removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;
