/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLength = 0;
    let stack = [-1]; // Base index for the first valid substring

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i); // Reset the base
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
};
