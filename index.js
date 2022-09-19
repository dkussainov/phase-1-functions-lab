// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue); 
  }

  console.log(distanceFromHqInBlocks);

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }

  console.log(distanceFromHqInFeet);

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
  }

  console.log(distanceTravelledInFeet);

  function calculatesFarePrice(start, destination) {
    let distance = (Math.abs(destination - start) * 264);
    console.log(distance)
    if (distance < 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
    } else if (distance >= 2000 && distance < 2500) {
        return 25
    } else {
        return ('cannot travel that far')
    } 
  }

  console.log(calculatesFarePrice);