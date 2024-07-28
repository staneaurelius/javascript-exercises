const findTheOldest = function(people) {
    const peopleAges = people.map(
        (person) => person.yearOfDeath ?
            person.yearOfDeath - person.yearOfBirth :
            new Date().getFullYear() - person.yearOfBirth
        );
        
    const oldestAgeIndex = peopleAges.indexOf(
        Math.max(...peopleAges)
    );
    
    return people[oldestAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
