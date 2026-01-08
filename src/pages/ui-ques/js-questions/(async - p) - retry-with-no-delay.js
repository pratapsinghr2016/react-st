function retry(cb, attempts) {
  return cb().catch((error) => {
    if (attempts > 0) {
      return retry(cb, attempts - 1);
    }
    throw error;
  });
}

// Input
const getTestFunc = () => {
  let count = 0;
  return async () => {
    count += 1;
    console.log(`Attempt ${count}`);
    if (count < 5) {
      throw new Error("Less than 5");
    }
    return "success";
  };
};

const test = async () => {
  await retry(getTestFunc(), 10);
  console.log("10 attempts > 5 limit = success");

  await retry(getTestFunc(), 3);
  console.log("3 attempts < 5 limit = success");
};

test().catch((err) => console.log("err:", err.message));