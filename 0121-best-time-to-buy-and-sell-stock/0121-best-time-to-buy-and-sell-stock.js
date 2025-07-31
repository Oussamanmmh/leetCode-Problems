/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profitDay=1 ;
    let buyDay=0;
    let maxProfit = 0 ;
    for(let i=0;i<prices.length;i++){
        if(prices[profitDay]-prices[buyDay]<=0){
            buyDay = profitDay
        }
        if(prices[profitDay]-prices[buyDay] > maxProfit){
            maxProfit = prices[profitDay]-prices[buyDay]
        }
        profitDay++;
    }
    return maxProfit;
};