function findMatching(driverArray, string) {
  const result = driverArray.filter(driver => driver.toUpperCase() == string.toUpperCase());
  return result
}

function fuzzyMatch(driverArray, string){
  let stringLength = string.length;
  const result = driverArray.filter(driver => driver.substring(0, stringLength) === string)
  return result
}
