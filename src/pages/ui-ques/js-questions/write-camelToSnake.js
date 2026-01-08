function camelToSnake(str) {
  let result = '';

  for (let char of str) {
    if (char >= 'A' && char <= 'Z') {
      result += '_' + char.toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
}

console.log(camelToSnake('myVariableName'));  // my_variable_name
console.log(camelToSnake('getElementById'));  // get_element_by_id