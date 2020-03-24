function findMatching(driverArray, string) {
  let drivers = driverArray.filter(driver => {
    return driver === string;
  })
}
