const findTheOldest = function (people) {
    // find function that returns today's date
    let oldestPerson;
    
    function getAge(person) {
        let thisYear = new Date().getFullYear()
        if (person?.yearOfBirth && person?.yearOfDeath) {
            return (person.yearOfDeath - person.yearOfBirth);
        } else if (person?.yearOfBirth) {
            return (thisYear - person.yearOfBirth);
        }
        return 0;
    }

    people.map((person) => {
        if (getAge(person) > getAge(oldestPerson)) {
            oldestPerson = person;
        }
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
