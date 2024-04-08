// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        const values = Object.values(collection);
        const keys = Object.keys(collection);
        for (let i = 0; i < values.length; i++) {
            callback(values[i], keys[i], collection);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const result = [];
    myEach(collection, (value, key, coll) => {
        result.push(callback(value, key, coll));
    });
    return result;
}

function myReduce(collection, callback, acc) {
    let startIndex = 0;
    if (acc === undefined) {
        acc = collection[0];
        startIndex = 1;
    }
    myEach(collection, (value, key, coll) => {
        acc = callback(acc, value, coll);
    });
    return acc;
}

function myFind(collection, predicate) {
    let result;
    myEach(collection, (value, key, coll) => {
        if (predicate(value, key, coll)) {
            result = value;
            return false; // Break the loop when found
        }
    });
    return result;
}

function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (value, key, coll) => {
        if (predicate(value, key, coll)) {
            result.push(value);
        }
    });
    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

// Array Functions
function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

// Object Functions
function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

// Example function calls for testing
console.log(myEach([1, 2, 3], alert));
console.log(myEach({ one: 1, two: 2, three: 3 }, alert));

console.log(myMap([1, 2, 3], function(num) { return num * 3; }));
console.log(myMap({ one: 1, two: 2, three: 3 }, function(num, key) { return num * 3; }));

console.log(myReduce([1, 2, 3], function(acc, val) { return acc + val; }, 10));
console.log(myReduce({ one: 1, two: 2, three: 3 }, function(acc, val) { return acc + val; }));

console.log(myFind([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; }));
console.log(myFind({ one: 1, three: 3, four: 4, six: 6 }, function(num) { return num % 2 == 0; }));

console.log(myFilter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; }));
console.log(myFilter({ one: 1, three: 3, five: 5 }, function(num) { return num % 2 == 0; }));

console.log(mySize({ one: 1, two: 2, three: 3 }));
console.log(mySize([]));

console.log(myFirst([5, 4, 3, 2, 1]));
console.log(myFirst([5, 4, 3, 2, 1], 3));

console.log(myLast([5, 4, 3, 2, 1]));
console.log(myLast([5, 4, 3, 2, 1], 3));

console.log(myKeys({ one: 1, two: 2, three: 3 }));
console.log(myValues({ one: 1, two: 2, three: 3 }));
