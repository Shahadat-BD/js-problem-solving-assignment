function canPay(changeArray, totalDue) {
  if (!changeArray.length) {
    return "Hey! array is empty.So provide the numbers in an array";
  } else {
    let sumChange = 0;
    for (let i = 0; i < changeArray.length; i++) {
      const element = changeArray[i];
      sumChange += element;
    }
    if (sumChange >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(canPay([3,4,3], 10));
