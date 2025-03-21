/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.trim()==="")return 0
    result = s.trim().split(/\s+/)
    return result.length
};