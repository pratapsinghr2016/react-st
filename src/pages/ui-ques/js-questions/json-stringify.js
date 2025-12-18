/* 
- null, undefined, boolean, number
- string
- object
  - array
  - object

*/


function myJsonStringify(value, visited = new WeakSet()) { // 
  if (value === null) return "null"
  if (typeof value === "boolean" || typeof value === "number") return String(value)
  if (typeof value === "string") return `"${value}"`
  if (typeof value === 'function' || typeof value === 'undefined') return undefined;

  if (typeof value === "object") {
    if (visited.has(value)) {
      throw new Error("circular refernce") //
    }

    visited.add(value);

    if (Array.isArray(value)) {
      const strVal = value.map((item) => myJsonStringify(item, visited));
      return `[${strVal}]`
    }

    const realObj = Object.keys(value) //
      .map((key) => {
        const deducedVal = myJsonStringify(value[key], visited);
        // return `"${key}":${deducedVal}`
        return deducedVal !== undefined ? `"${key}":${deducedVal}` : undefined //
      }).filter(Boolean)
    return `{${realObj.join(",")}}` //

  }
}

const company = {
  name: "DashClicks",
  location: {
    city: "Miami",
    country: { a: "USA", b: undefined }
  },
  employees: ["Alice", "Bob", "Charlie"]
};

console.log(JSON.stringify(company))
console.log(myJsonStringify(company));