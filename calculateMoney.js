function calculateMoney(ticketCount) {
  let ticketPrice = 120;
  let guardCost = 500;
  let stuffLunchCost = 8 * 50;
  let totalRemainingMoney = ticketCount * ticketPrice - (guardCost+stuffLunchCost);
  let totalEarning = 0;

  if (ticketCount >= 0 && typeof ticketCount === "number") {
    totalEarning += totalRemainingMoney;
  } else {
    return "Error!, Please enter a valid number.";
  }
  return totalEarning;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-9));
