const rgbToHex = (code) => {
  const { r, g, b } = code;

  const rHex = r.toString(16);
  const gHex = g.toString(16);
  const bHex = b.toString(16)
  const hexCode = "#" + rHex + gHex + bHex
  return hexCode

}

console.log(rgbToHex({
  "r": 255,
  "g": 170,
  "b": 51
}))
// console.log(rgbToHex("#fa3"))