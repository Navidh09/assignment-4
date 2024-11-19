function password(personInfo) {
  let year = personInfo.birthYear;
  // console.log(year);
  if (
    year.toString().length !== 4 ||
    personInfo.name === undefined ||
    personInfo.birthYear === undefined ||
    personInfo.siteName === undefined
  ) {
    return "invalid";
  }
  let password =
    personInfo.siteName + "#" + personInfo.name + "@" + personInfo.birthYear;

  let firstLetter = password.slice(0, 1).toUpperCase();
  let remainingLetter = password.slice(1);
  let finalPassword = firstLetter + remainingLetter;
  return finalPassword;
}

const person = {
  name: "kolimuddin",
  birthYear: 2001,
  siteName: "google",
};
const person1 = {
  name: "rahat",
  birthYear: 2002,
  siteName: "Facebook",
};
const person2 = {
  name: "toky",
  birthYear: 200,
  siteName: "Facebook",
};
const person3 = {
  name: "maisha",
  birthYear: 2002,
};

console.log(password(person));
console.log(password(person1));
console.log(password(person2));
console.log(password(person3));
