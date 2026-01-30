export const data = [
  {
    age: 12,
    name: "name-1"
  },
  {
    age: 89,
    name: "name-2"
  },
  {
    age: 18,
    name: "name-3"
  },
  {
    age: 22,
    name: "name-5"
  }
]

function sortByAge(arr) {

  return arr.sort((a, b) => a.age - b.age)

}



console.log(sortByAge(data))

export default sortByAge