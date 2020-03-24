function findMatching(driverArray, string) {
  const result = driverArray.filter(driver => driver.toUpperCase() == string.toUpperCase());
  return result
}

function fuzzyMatch(driverArray, string){
  const result = driverArray.filter(driver => driver.charAt(0) === string)
  return result
}