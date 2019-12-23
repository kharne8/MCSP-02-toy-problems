// Write a function that takes in a string of the time and returns the time in military format.
//Ex: militaryTime('7:47pm') returns '19:47'

function militaryTime(timeStr) {
  var hr = Number(timeStr.split('')[0])
  var mins = Number(timeStr.split('')[2] + timeStr.split('')[3] )
  
  if (timeStr.split('')[4] === 'p'){
    hr += 12
  }
  
    
    return hr
}


console.log(militaryTime('8:10pm'));