function checkName(names) {
  // console.log(name);
  if (typeof names === "string") {
    let name = names.slice(-1).toLowerCase();
    let lastChar = ["a", "e", "i", "o", "u", "y", "w"];
    
    if (lastChar.includes(name)) {
      return "Good Name";
    }
    return "Bad Name";
  }
  return "invalid";
}

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Salman"]));
