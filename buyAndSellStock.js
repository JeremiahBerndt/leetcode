/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

I: an array of prices
O: the max profit from lowest price to highest, in order
C: None
E: None

*/

var maxProfit = function (prices) {
  //create max profit var
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  // iterate through prices
  prices.forEach((price, index) => {
    // iterate through prices again for each price

    // YOU DONT HAVE TO CHECK EACH VALUE AGAINST EVERY OTHER VALUE (N^2). IT IS ENOUGH
    //TO TRACK THE LOWEST VALUE AND COMPARE THAT TO EVERY SUBSEQUENT VALUE FOR THE LARGEST PROFIT
    min = Math.min(min, price)
    //min = 7
    //min = 1
    //min = 1
    max = Math.max(max, price - min)
    //max = 0
    //max = 0
    //max = 5
  })
  // return current max
  return max;
};

console.log(maxProfit([7, 1, 6, 4]))