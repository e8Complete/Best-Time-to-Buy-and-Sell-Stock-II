/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length < 2){
    return 0;
  }
  let profit = 0;
  for(let thisDay = 0; thisDay <= prices.length; thisDay++){
    if(prices[thisDay] < prices[thisDay+1]){
      profit += prices[thisDay+1]-prices[thisDay];
    }
  }
  return profit;
};


console.log(maxProfit([7,1,5,3,6,4]))
