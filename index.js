'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * idenity: Function takes in any input value and returns that value unchanged.
 * 
 * @param { Any Value }: Function takes in any input value.
 * 
 * @return { Any Value }:  Function returns input value unchanged.
 */
function identity(value){
    return value;
};
module.exports.identity = identity;

/**
 * typeOf: Function takes in any value and returns a string of the data type of value
 * 
 * @param { Any Value }: Function takes in any input value
 * 
 * @return { String Value }: Function returns a string of the data type of value
 */

function typeOf(value){
    if (typeof value === "string"){ //  tests if value is a string
        return "string";    //  returns "string"
    }   else if (typeof value === "boolean"){   //  tests if value is a boolean
        return "boolean";   //  returns "boolean"
    }   else if (typeof value === "number"){    //  tests if value is a number
        return "number";    //  returns "number"
    }   else if (typeof value === "undefined"){ //  tests if value is undefined
        return "undefined"; //  returns "undefined"
    }   else if (typeof value === "function"){  //  tests if value is a function
        return "function";  //  returns "function"
    }   else if (value === null){   //  tests if value is null
        return "null";  // returns "null"
    }   else{   //  any other condition
        if (Array.isArray(value)){  // tests if value is an array
            return "array"; //  returns array
        }   else {  //  any other object
            return "object";    //  returns "object"
        }
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Function takes in an array and a number and returns an array of the first numbers of the array.  If an array is not given, returns an empty array.  If a number is not given, returns the first element of the array.
 * 
 * @param { An Array }: Function takes in an array.
 * @param { A number }: Function takes in a any number value.
 * 
 * @return { An Array }: Function returns an array of the first number values.
 *  
 */
function first(arr, num){
    if (!Array.isArray(arr) || num < 0){   //  tests if arr is not an array
        return [];  //  returns an empty array
    }   else{   //  else, arr is an array
        if (num === undefined){ //  tests if num is not passed
            return arr[0];  //  returns first element of array
        }   else {  //  else, array is array and num is passed
            return arr.slice(0, num);//  return the first num elements of the array
        }
    }
}
module.exports.first = first;

/**
 * last: Function takes in an array and a number, then returns the last numbers of the array.  If an array is not passed, returns an empty array.  If a number is not passed, returns the last element of the array.
 * 
 * @param { An Array }: Function takes in an array.
 * @param { A Number }: Function takes in a number.
 * 
 * @return { An Array }: Function returns an array of the last number values.
 */

function last(arr, num){
    if (!Array.isArray(arr) || num < 0){    //   tests if arr is an array OR num is negative
        return [];  //  returns empty array
    }   else {  //  else, arr is an array
        if (num === undefined){ //  tests if num is passed
            return arr[arr.length - 1]; //  if true, returns the last element of the array
        }   else if (num > arr.length){ //  tests if num is greater than the length of array
            return arr; //  returns whole arr
        }   else {  //  else, num is passed
            return arr.slice(arr.length - num);  //  returns the last num elements of the array
        }
    }
}
module.exports.last = last;

/**
 * indexOf: Function takes in an array and a value, then returns the index of the first occurence of the value.  If the array does not contain the value, returns -1.
 * 
 * @param { An Array }: Function takes in an array.
 * @param { Any Value }: Function takes in any value.
 * 
 * @return { A Number }: Function returns the index number of the first occurence of the value in the array.  If no value exists, returns -1;
 */
function indexOf(arr, val){
    for (var i = 0; i < arr.length; i ++){//  iterate through arr
        if (arr[i] === val){//  test if current element is val
            return i;//  if true, return element index
        }
    }
 return -1;   //  return -1 in outermost code block
}
module.exports.indexOf = indexOf;

/**
 * contains: Function takes an array and a value, then returns true if the array contains the value and false otherwise.
 * 
 * @param { An Array }: Function takes in an array.
 * @param { Any Value }: Function takes in any value.
 * 
 * @return { Boolean }: Function returns true if the value is in the array; false otherwise.
 */
function contains(array, value){
    //  tests if array includes value.  Returns true if true, false if false
    return (array.includes(value)? true : false);
}
module.exports.contains = contains;

/**
 * each: Function takes a collection and a function.  If the collection is an array, the function calls the function for each element in the array with the element, index, and array as arguments.  If the collection is an object, the function calls the function for each property with the value, key, and object as arguments.
 * 
 * @param { A Collection }: Function takes in a collection input
 * @param { A Function }: Function takes in a function input
 */
function each(collection, func){
    if (Array.isArray(collection)){ //  tests if collection is an array
        for (var i = 0; i < collection.length; i++){    //  iterate through array
            func(collection[i], i, collection)  //  call function for each element, index, and collection
        }
    }   else {  //  else it's an object
        for (var key in collection){    //  iterate through object
            func(collection[key], key, collection)  //  call function for each property value, key, collection
        }
    }
}
module.exports.each = each;

/**
 * unique: Function takes an array and returns an new array with duplicate values removed.
 * 
 * @param { An Array }: Function takes in an array as an input
 * 
 * @return { An Array }: Function returns an array containing the values from the input array with duplicate values removed.
 */
function unique(array){
    let newArr = [];    //  initialize newArr array
    for (var i = 0; i < array.length; i++){ //  iterate through array
        if (newArr.indexOf(array[i]) === - 1){  //  tests if newArr does not contain current iteration element
            newArr.push(array[i]);  //  push current element into newArr
        }
    }
return newArr;  //  returns newArr
}
module.exports.unique = unique;

/**
 * filter: Function takes an array input and a function input, then calls the input function for each element of the input array, pushing values for which the function resolved to true.
 * 
 * @param { An Array }: Function takes in an array input
 * @param { A Function }: Function takes an input function.
 * 
 * @return { An Array }: Function returns a new array with values from the input array that have resolved true when passed into input function.
 */
function filter(array, func){
    var newArray = [];  //  initialize newArray with value of empty of array
    for (var i = 0; i < array.length; i++){ //  iterate over array
        if (func(array[i], i, array)){  //  test if passing element, index, and array returns true
            newArray.push(array[i]);    //  if true, push element into newArray
        }
    }
return newArray;    //  returns newArray
}
module.exports.filter = filter;

/**
 * reject: Function takes in an array input and a function input, then returns an array filled with values from the input array where passing into the input function returned false.
 * 
 * @param { An Array }: Function takes in an array input
 * @param { A Function }: Function takes in a function input
 * 
 * @return { An Array }: Function returns a new array filled with values from the input array that have resolved false when passed into the input function.
 */
function reject(array, func){
    var newArray = [];  //  initialize newArray
    for (var i = 0; i < array.length; i++){ //  iterate over array
        if (!func(array[i], i, array)){ //  test if passing element, index, and array returns not true
            newArray.push(array[i]);    //  if not true, push into newArray
        }
    }
return newArray;    //  returns newArray
}
module.exports.reject = reject;

/**
 * partition: Function takes in an array input and a function input and returns a new array with two sub arrays containing values from the input array that have resolved truthy or falsy when passed through the input function.
 * 
 * @param { An Array }: Function takes in an input array.
 * @param { A Function }: Function takes in an input function.
 * 
 * @return { An Array }: Function returns an array with two sub arrays.  One inner array contains values from the input array that have resolved truthy, the other contains values from the input array that have returned falsy.
 */
function partition(array, func){
    var newArray = [[],[]]; //  initialize newArray with two sub arrays
    for (var i = 0; i < array.length; i++){ //  iterate through array
        if (func(array[i], i, array)){  //  test if passing element, index, or array is truthy
            newArray[0].push(array[i]); //  if truthy, push element into newArray[0]
        }   else {  //  else, is falsy
            newArray[1].push(array[i]); //  pushes element into newArray[1]
        } 
    }
return newArray;    //  returns newArray
}
module.exports.partition = partition;

/**
 * map: Function takes in a collection and a function, then returns a new array containing return values from passing the values from the input collection into the input function.
 * 
 * @param { A Collection }: Function takes in a collection input.
 * @param { A Function }: Function takes in a function input.
 * 
 * @return { An Array }: Function returns an array with the returned values resulting from passing the input collection values into the input function.
 */
function map(collection, func){
    var newArray = [];  //  initialize newArray
        if (Array.isArray(collection)){ //  test if collection is an array
            for (var i = 0; i < collection.length; i++){    //  if true, iterate through array
                newArray.push(func(collection[i], i, collection));  //  push the result of passing element, index, or collection into newArray
            }   
        }   else {  //  else, collection is an object
            for (var key in collection){    //  iterate through collection object
                newArray.push(func(collection[key], key, collection));  //  push the result of passing value, property or collection into func
            }
        }
    return newArray;    //  returns newArray
}
module.exports.map = map;

/**
 * pluck: Function takes in an array of objects and a property, then returns an array containing the values contained in the input property within the input array of objects.
 * 
 * @param { An Array }: Function contains an input array of objects.
 * @param { A Property }: Function takes a property input.
 * 
 * @return { An Array }: Function returns an array containing the values located at the input property of all objects in the input array.
 */
function pluck(array, property){
    //  return f
   return array.map(function(value){
    return value[property];
    });
}
module.exports.pluck = pluck;

/**
 * every: Function takes in a collection and a function, then returns true if all elements of the collection resolve to true when passed into the input function.  The function will return false if even one element resolves to false.  If no function is given, return the boolean value of the element itself.
 * 
 * @param { A Collection }: Function takes in a collection input.
 * @param { A Function }: Function takes in an input function.
 * 
 * @return { Boolean }: Function returns a boolean of true only if all elements in the collection resolve to true.
 */
function every(collection, func){
    //  determine if collection is array
    if (Array.isArray(collection)){
        //determine if func wasn't passed in
        if (func === undefined){
            for (var i = 0; i < collection.length; i++){  //   iterate
            //determine if the current item is not truthy (faster)
            if (!collection[i]){
                // return false
                return false;
                }
            }
        }else {//  is array and func was passed
            for (let i = 0; i < collection.length; i++){
                //determine if current value return false when passed into func
                if (func(collection[i], i, collection) === false){
                    return false;
                }
            }
        }
    }else { // it was an object
        if (func === undefined){//  determine if current value returns false when passed into func
            for (var key in collection){// 
                if (!collection[key]){
                    return false;
                    }
                }
            }else { //  func is passed
                for (var key in collection){    //  iterate through object
                    if (func(collection[key], key, collection) === false){
                        return false;
                    }
                }
            }
    } 
    return true;
}
module.exports.every = every;

/**
 * some: Function takes a collection and a function, then returns true if any of the elements of the input collection resolve to true when passed into the input function.
 * 
 * @param { A Collection }: Function takes a collection input.
 * @param { A Function }: Function takes in a function input.
 * 
 * @return { Boolean }: Function returns a true if even one of the elements of the input collection resolves to true when passed into the input function.  Function returns false only if all elements return false when passed into input function.
 */
function some(collection, func){
    if (Array.isArray(collection)){ //  test if collection is array
            if (func === undefined){ // test if func is not passed
                for (var i = 0; i < collection.length; i++){    //  loop through collection
                    if (collection[i]){ //  test if at least one item is true
                        return true;    //  return true
                    }
                }
            }else{  //  func is passed
                for (var i = 0; i < collection.length; i++){    //  iterate through collection
                    if (func(collection[i], i, collection) === true){    // Test if element is true
                        return true;    // return true
                    }
                }
            }
    }else { //  else collection is an object
        if (func === undefined){ //  test if func is not passed
            for (var key in collection){    //  iterate through object
                if (func(collection[key], key, collection)){    //  Test if element is true
                    return true;    //  return true
                }
            }
        }else {
            for (var key in collection){
                if (func(collection[key], key, collection)){
                    return true;
                }
            }
        }
    }
    return false;
}
module.exports.some = some;

/**
 * reduce: Function takes in an array, a function and a seed value.  The function will iterate through the input array passing each element of the input array into the function input with the arguments of: previous result, current element, and input array.  On the last iteration, the function will return the result of the last function call. 
 * 
 * @param { An Array }: Function takes in an input array.
 * @param { A Function }: Function takes in an input function.
 * 
 * @return { A Value }: Function will return the value of the last iteration of the function call.
 */
function reduce(array, func, seed){
    //  create result variable
    let result;
    //  determine if seed did not receive a value
    if (seed === undefined){
        result = array[0];
        for (let i = 1; i < array.length; i++){ //  iterate through array at 1 index
            result = func(result, array[i], i, array);  //
        }
    } else {    //  else it did
        result = seed;
        for (let i = 0; i < array.length; i++){
            result = func(result, array[i], i, array);
        }
    }

return result;
}
module.exports.reduce = reduce;

/**
 * extend: Function takes in an object and any additional number of objects, then returns the first object updated with all the properties from all other objects.
 * 
 * @param { An Object }: Function takes in an object input.
 * @param { ...Objects }: Function takes in any number of additional object inputs.
 * 
 * @return { An Object }: Function returns the first object updated with all the properties from the other objects.
 */
function extend(object1, ...moreObjects){
    for (var i = 0; i < moreObjects.length; i++){//  iterate through moreObjects
        Object.assign(object1, moreObjects[i]);// assign current iteration to object1
    }
    return object1;//  return object
}
module.exports.extend = extend;

/**
 * 
 */