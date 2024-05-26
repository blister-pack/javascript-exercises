const reverseString = function(toReverse) {
    let iterator = toReverse.length;
    console.log(iterator);
    let reversedString = "";

    for (iterator; iterator < 0; iterator--) {
        let letterToAdd = toReverse[iterator - 1];
// for loop never executes because iterator is never smaller than 0
        console.log(letterToAdd);
        reversedString += letterToAdd;
        console.log(reverseString);
    }
    return reversedString;
};

reverseString("Hello!")

// Do not edit below this line
module.exports = reverseString;
