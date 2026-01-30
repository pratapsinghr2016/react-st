import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Count is 11:", count);
       // ✅ Always current
    }, 1000);

    return () => clearInterval(timer);
  }, [count]); // count is a dependency

  useEffect(() => {
  const timer = setInterval(() => {
    // Using functional update to get current count
    setCount(prevCount => {
      console.log("Count is 22:", prevCount); // ✅ Always current
      return prevCount;
    });
    // ! setCount(count)
  }, 1000);

  return () => clearInterval(timer);
}, []); // Empty dependency - still works!


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev)=>prev + 1)}>Increment</button>
    </div>
  );
}

export default Counter