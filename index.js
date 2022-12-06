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
 * 
 */

