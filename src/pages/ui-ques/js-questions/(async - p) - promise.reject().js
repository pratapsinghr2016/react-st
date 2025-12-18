function promiseReject(message) {
  const rej = new Promise((_, reject) => reject(message))
  return rej

}

try {
  promiseReject("Monday")
} catch (err) {
  console.log(err)
}