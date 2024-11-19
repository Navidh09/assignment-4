function deleteInvalids(numbers) {
  if (Array.isArray(numbers) === false) {
    return "Invalid Array";
  }
  const finalArray = [];
  for (let number of numbers) {
    if (typeof number !== "number" || isNaN(number)) {
      continue;
    }
    finalArray.push(number);
  }
  return finalArray;
}

console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));
