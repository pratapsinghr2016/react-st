function isSubSequence(s, t) {
  if (s.length === 0) return true;

  let i = 0;
  let j = 0;

  while (j < t.length) {
    const sChar = s.charAt(i);
    const tChar = t.charAt(j);

    if (sChar == tChar) {
      i++;
      j++;
    } else {
      j++
    }

    if (i === s.length) {
      return true
    } else if (j === t.length) {
      return false
    }
  }

}

console.log(isSubSequence("abc", "ahbgdc")); // true
console.log(isSubSequence("axc", "ahbgdc")); // false
console.log(isSubSequence("", "ahbgdc"));    // true (edge case)