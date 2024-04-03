function distanceFromHqInBlocks(someValue){
return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue){
    let someOtherValue=distanceFromHqInBlocks(someValue)
    return someOtherValue* 264
}


function distanceTravelledInFeet(start, destination){
return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination){
let dtif=distanceTravelledInFeet(start, destination)
if(dtif <= 400){
    return 0
  } else if(dtif > 400 && dtif < 2000){
      return (dtif-400)*0.02
    } else if(dtif > 2000 && dtif < 2500){
      return 25
    } else {
      return 'cannot travel that far'
}}