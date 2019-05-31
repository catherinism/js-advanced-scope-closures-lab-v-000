function produceDrivingRange(blockRange) {
  return function(blockRangeOne, blockRangeTwo) {
    // debugger
    let difference = Math.abs(parseInt(blockRangeOne) - parseInt(blockRangeTwo))
    console.log(difference)

    if (blockRange > difference) {
      return `within range by ${blockRange - difference}`
    }
    else {
      return `${difference - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function (fare) {
    return percentage*fare
  }
}

let driverId = 0

function createDriver() {
  return class Driver {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
