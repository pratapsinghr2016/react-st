function convertTo24Hrs(time) {
  if (time.includes("PM")) {
    const timeWithoutPrefix = time.replace("PM", "");
    const [hourse, minutes] = timeWithoutPrefix.split(":")
    let hrNum = Number(hourse);
    let minNum = Number(minutes);
    if (hrNum < 12) {
      hrNum += 12
    }
    return hrNum + ":" + minNum
  }

  if (time.includes("AM")) {
    const timeWithoutPrefix = time.replace("AM", "");
    const [hourse, minutes] = timeWithoutPrefix.split(":")
    let hrNum = Number(hourse);
    let minNum = Number(minutes);
    if (hrNum === 12) {
      hrNum = 0
    }
    return String(hrNum).padStart(2, "0") + ":" + minNum
  }
}

console.log(convertTo24Hrs("1:10AM"))
console.log(convertTo24Hrs("12:10AM"))
console.log(convertTo24Hrs("12:10PM"))
console.log(convertTo24Hrs("6:10PM"))