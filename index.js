// myEach: Iterates over a collection and applies a callback to each element
function myEach(collection, callback) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    callback(values[i], i, collection);
  }
  return collection;
}

// myMap: Creates a new array populated with the results of calling a callback on every element
function myMap(collection, callback) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(callback(values[i], i, collection));
  }
  return result;
}

// myReduce: Reduces a collection to a single value using a callback
function myReduce(collection, callback, acc) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  let startIndex = 0;
  if (acc === undefined) {
    acc = values[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }
  return acc;
}

// myFind: Returns the first element that satisfies the callback
function myFind(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i], i, collection)) {
      return values[i];
    }
  }
  return undefined;
}

// myFilter: Returns a new array with elements that satisfy the callback
function myFilter(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i], i, collection)) {
      result.push(values[i]);
    }
  }
  return result;
}

// mySize: Returns the size of the collection
function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// myFirst: Returns the first element or the first n elements
function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
}

// myLast: Returns the last element or the last n elements
function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// myKeys: Retrieves all the keys of an object
function myKeys(object) {
  return Object.keys(object);
}

// myValues: Retrieves all the values of an object
function myValues(object) {
  return Object.values(object);
}

// Export functions if needed
// module.exports = { myEach, myMap, myReduce, myFind, myFilter, mySize, myFirst, myLast, myKeys, myValues };