/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

    var filtredArray = []
    arr.forEach(num=>{
        if(fn(num ,arr.indexOf(num))) filtredArray.push(num)
    })
    return filtredArray
    
};