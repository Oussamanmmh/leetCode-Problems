/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit =  0 ;
    for(let i =0 ; i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice = prices[i];

        }
        else {
            maxProfit = Math.max(maxProfit , prices[i]-minPrice)
        }
    }
    return maxProfit ;
};