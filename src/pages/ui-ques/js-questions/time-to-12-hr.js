
function convertTimeTo12Hrs(time) {
  const [hours, minutes] = time.split(":")
  let hrNum = Number(hours)
  let prefix = "AM"

  if (hrNum >= 12) {
    prefix = "PM"
  }

  if (hrNum === 0) { // ! equal 0
    hrNum = 12
  } else if (hrNum > 12) { // ! greater than 12
    hrNum -= 12
  }

  return hrNum + ":" + minutes + prefix
}

console.log(convertTimeTo12Hrs("00:00"))   // → "12:00AM" (midnight)
console.log(convertTimeTo12Hrs("00:30"))   // → "12:30AM" (after midnight)
console.log(convertTimeTo12Hrs("12:00"))   // → "12:00PM" (noon)
console.log(convertTimeTo12Hrs("12:33"))   // → "12:33PM"
console.log(convertTimeTo12Hrs("23:12"))   // → "11:12PM"
console.log(convertTimeTo12Hrs("11:45"))   // → "11:45AM"
console.log(convertTimeTo12Hrs("13:05"))   // → "1:05PM"
