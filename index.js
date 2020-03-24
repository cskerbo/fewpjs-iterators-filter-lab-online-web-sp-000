function findMatching(driverArray, string) {
  const result = driverArray.filter(driver => driver.toUpperCase() == string.toUpperCase());
  return result
}
