function snakeToCamel(str) {
  let result = '';
  let capitalizeNext = false;

  for (let char of str) {
    if (char === '_') {
      capitalizeNext = true;
    } else {
      result += capitalizeNext ? char.toUpperCase() : char;
      capitalizeNext = false;
    }
  }

  return result;
}

console.log(snakeToCamel('my_variable_name'));  // myVariableName ✅
console.log(snakeToCamel('get_element_by_id')); // getElementById ✅
console.log(snakeToCamel('user_id'));           // userId ✅