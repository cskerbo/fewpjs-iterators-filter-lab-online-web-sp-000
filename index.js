function findMatching(driverArray, string) {
  driverArray.filter(driver => {
    return driver === string;
  })
}
