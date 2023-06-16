function isObject(value) {
  return typeof value === 'object' && value !== null;
}

function objectToArray(obj) {
  return Object.values(obj);
}

function objectToKeys(obj) {
  return Object.keys(obj);
}

function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (isObject(collection)) {
    const values = objectToArray(collection);
    const keys = objectToKeys(collection);
    for (let i = 0; i < values.length; i++) {
      callback(values[i], keys[i], collection);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else if (isObject(collection)) {
    const values = objectToArray(collection);
    const keys = objectToKeys(collection);
    for (let i = 0; i < values.length; i++) {
      result.push(callback(values[i], keys[i], collection));
    }
  }
  return result;
}

function myReduce(collection, callback, acc) {
  if (Array.isArray(collection)) {
    let startIdx = 0;
    if (acc === undefined) {
      acc = collection[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else if (isObject(collection)) {
    const values = objectToArray(collection);
    const keys = objectToKeys(collection);
    let startIdx = 0;
    if (acc === undefined) {
      acc = values[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < values.length; i++) {
      acc = callback(acc, values[i], keys[i], collection);
    }
  }
  return acc;
}

function myFind(collection, predicate) {
  let result;
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result = collection[i];
        break;
      }
    }
  } else if (isObject(collection)) {
    const values = objectToArray(collection);
    const keys = objectToKeys(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i], keys[i], collection)) {
        result = values[i];
        break;
      }
    }
  }
  return result;
}

function myFilter(collection, predicate) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else if (isObject(collection)) {
    const values = objectToArray(collection);
    const keys = objectToKeys(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i], keys[i], collection)) {
        result.push(values[i]);
      }
    }
  }
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (isObject(collection)) {
    return objectToArray(collection).length;
  } else {
    return 0;
  }
}

function myFirst(collection, n = 1) {
  if (Array.isArray(collection)) {
    return collection.slice(0, n);
  } else if (isObject(collection)) {
    const values = objectToArray(collection);
    return values.slice(0, n);
  } else {
    return undefined;
  }
}

function myLast(collection, n = 1) {
  if (Array.isArray(collection)) {
    return collection.slice(-n);
  } else if (isObject(collection)) {
    const values = objectToArray(collection);
    return values.slice(-n);
  } else {
    return undefined;
  }
}
function myKeys(obj) {
  if (isObject(obj)) {
    return Object.keys(obj);
  } else {
    return [];
  }
}

function myValues(obj) {
  if (isObject(obj)) {
    return Object.values(obj);
  } else {
    return [];
  }
}
function myLast(collection, n = 1) {
  if (Array.isArray(collection)) {
    if (n === 1) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  } else if (isObject(collection)) {
    const values = objectToArray(collection);
    if (n === 1) {
      return values[values.length - 1];
    } else {
      return values.slice(-n);
    }
  } else {
    return undefined;
  }
}
function myFirst(collection, n = 1) {
  if (Array.isArray(collection)) {
    if (n === 1) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  } else if (isObject(collection)) {
    const values = objectToArray(collection);
    if (n === 1) {
      return values[0];
    } else {
      return values.slice(0, n);
    }
  } else {
    return undefined;
  }
}

