function longestKDistinct(str = "", k) {
  if (k === 0 || str.length === 0)
    return 0;

  const window = new Map();
  let maxWindowSize = 0;

  let left = 0;

  for (let right = 0; right < str.length; right++) {

    const currChar = str[right];
    window.set(currChar, (window.get(currChar) || 0) + 1);

    while (window.size > k) {
      window.set(str[left], window.get(str[left]) - 1);
      if (window.get(str[left]) === 0)
        window.delete(str[left]);
      left++;
    }

    maxWindowSize = Math.max(maxWindowSize, right - left + 1);  // ← Fixed
  }

  return maxWindowSize;
}

// Test
console.log(longestKDistinct("eceba", 2));    // 3
console.log(longestKDistinct("aa", 1));       // 2
console.log(longestKDistinct("abaccc", 2));   // 4
console.log(longestKDistinct("a", 0));        // 0