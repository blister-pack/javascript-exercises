const reverseString = function(toReverse) {
    let iterator = toReverse.length;
    let reversedString = "";

    for (iterator; iterator > 0; iterator--) {
        let letterToAdd = toReverse[iterator - 1];
        reversedString += letterToAdd;
    }
    return reversedString;
};

reverseString("Hello!")

// Do not edit below this line
module.exports = reverseString;
