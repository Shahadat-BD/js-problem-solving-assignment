function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    const errorMessage = "please provide the string";
    return errorMessage;
  } else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}

const string1 = "javascript";
const string2 = "jav";
console.log(matchFinder(string1, string2));
