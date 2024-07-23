const removeFromArray = function(elementArray, ...elements) {
    // Iterate over all values to be removed
    for (let i = 0; i < elements.length; i++) {
        // Keep removing the same element if multipel values of it exist
        while (elementArray.includes(elements[i])) {
            // To remove elements, find its index and slice it from the array
            let elementIndex = elementArray.indexOf(elements[i]);
            elementArray.splice(elementIndex, 1);
        };
    };
    return elementArray;
};

// Do not edit below this line
module.exports = removeFromArray;