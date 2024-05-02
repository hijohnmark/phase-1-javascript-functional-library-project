function myEach(collection, callback){
    if (Array.isArray(collection)) {
        collection.forEach(item => callback(item))
    } else {
        const newColl = Object.values(collection)
        newColl.forEach(item => callback(item))
    }
    return collection
}

function myMap(collection, callback) {
    if (Array.isArray(collection)) {
        const newArrFromArr = collection.map(callback)
        return newArrFromArr
    } else {
        const newColl = Object.values(collection)
        const newArrFromObj = newColl.map(callback)
        return newArrFromObj
    }
}
    
function myReduce(collection, callback, acc) {
    const reducer = (arr, acc) => arr.reduce((a, item) => callback(a, item, arr), acc);
      
    if (Array.isArray(collection)) {
        if (acc !== undefined) {
            return reducer(collection, acc);
        } else {
            acc = collection[0];
            return reducer(collection.slice(1), acc);
        }
    } else {
        const newColl = Object.values(collection);
        if (acc !== undefined) {
            return reducer(newColl, acc);
        } else {
            acc = newColl[0];
            return reducer(newColl.slice(1), acc);
        }
    }
}

function myFind(collection, predicate){
    if (Array.isArray(collection)){
        const found = collection.find(item => predicate(item))
        return found
    } else {
        const newColl = Object.values(collection)
        const found = newColl.find(item => predicate(item))
        return found
    }
}

function myFilter(collection, predicate){
    if (Array.isArray(collection)){
        const filterArray = collection.filter(item => predicate(item))
        return filterArray
    } else {
        const newColl = Object.values(collection)
        const filterArray = newColl.filter(item => predicate(item))
        return filterArray
    }
}

function mySize(collection){
    if (Array.isArray(collection)){
        return collection.length
    } else {
        const newColl = Object.values(collection)
        return newColl.length
    }
}

function myFirst(array, n){
    if (n){
        const newArr = array.slice(0, n)
        return newArr
    } else return array[0]
}

function myLast(array, n){
    if (n){
        const newArr = array.slice(-n)
        return newArr
    } else return array[array.length-1]
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}

