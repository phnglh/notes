/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let totalDrank = numBottles; 
  let empty = numBottles;     

  while (empty >= numExchange) {
    const newBottles = Math.floor(empty / numExchange);
    totalDrank += newBottles;

    empty = (empty % numExchange) + newBottles;
  }

  return totalDrank;
};
