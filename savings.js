function monthlySavings(allPayments, livingCost) {
  if (!Array.isArray(allPayments) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalPayment = 0;
  let afterTax = 0;
  for (let payment of allPayments) {
    if (payment < 3000) {
      totalPayment += payment;
    }
    if (payment >= 3000) {
      let money = payment - payment * 0.2;
      afterTax += money;
    }
  }
  totalPayment += afterTax;
  let savings = totalPayment - livingCost;
  if (savings < 0) {
    return "earn more";
  }
  return savings;
}


console.log(monthlySavings([1000,2000,3000], 5400));
console.log(monthlySavings([1000,2000,2500], 5000));
console.log(monthlySavings([900,2700,3400], 10000));
console.log(monthlySavings(100,[900,2700,3400]));
