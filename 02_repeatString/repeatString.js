
const repeatString = function (repeatedString, numOfReps) {
    let newString = ""
    if (numOfReps < 0) {
        return "ERROR"
    }
    
    for (let index = 0; index < numOfReps; index++) {
        newString += repeatedString;
    }
    return newString

};

// Do not edit below this line
module.exports = repeatString;
