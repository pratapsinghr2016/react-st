const hextToRgb = (code) => {
  let hex = code.replace("#", "")
  if (hex.length === 3)
    hex = hex.split("").map((hItem) => hItem + hItem).join("")
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return { r, g, b }

}

console.log(hextToRgb("#ffaa33"))
console.log(hextToRgb("#fa3"))