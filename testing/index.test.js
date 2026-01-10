import sortByAge, { data } from ".";

test("test sorting by age", function () {
  const result = sortByAge(data)

  expect(result[0].name).toBe("name-1")
})
