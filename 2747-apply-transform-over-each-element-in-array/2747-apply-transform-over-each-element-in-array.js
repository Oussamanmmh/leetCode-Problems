/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = []
    arr.forEach((element , i )=>{
        returnedArray.push(fn(element , i))
    }) 
    return returnedArray 
};