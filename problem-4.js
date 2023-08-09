
function findAddress(obj) {
    const street = obj.street || "__";
    const house =  obj.house || "__";
    const society =  obj.society || "__";
    const accessProperty = street + "," + house + "," + society 
    return accessProperty;
}

const obj = {
street: 10,
house: "15A",
society: "Earth Perfect"
}

console.log(findAddress(obj));