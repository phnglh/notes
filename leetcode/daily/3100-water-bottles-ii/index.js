/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let total = numBottles;
    let empty = numBottles;

    while (empty >= numExchange) {
        total += 1;                       
        empty = empty - numExchange + 1;  
        numExchange += 1;                  
    }

  return total;
};
