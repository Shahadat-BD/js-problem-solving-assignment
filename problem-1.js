function cubeNumber(number) {
    if (typeof number !== "number") {
         const errorMessage = 'please provide the number'
         return errorMessage
    }else{
        const cubeResult = number * number * number
        return cubeResult;
    }
}

console.log("result of cubeFunction=",cubeNumber(3));
