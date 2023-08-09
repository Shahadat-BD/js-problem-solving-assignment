function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    const errorMessage = "please provide the array";
    return errorMessage;
  } 
  else {
     if (arr[0] < 0 || arr[1] < 0) {
          const errorMessage = "invalid input";
          return errorMessage;
     }
     else {
       if (arr[1] > arr[0]) {
          let sortingNum = [];
          const temp = arr[0];
          arr[0] = arr[1];
          arr[1] = temp;
          sortingNum.push(arr[0], arr[1]);
          return sortingNum;
      } 
      else if (arr[1] < arr[0]) {
        let noSort = [];
        noSort.push(arr[0], arr[1]);
        return noSort;
      } 
      else if (arr[1] === arr[0]) {
        const message = "equal";
        return message;
      }
    }
  }
}
const array = [2,3];
console.log(sortMaker(array));
