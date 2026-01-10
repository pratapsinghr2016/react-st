// ! One-liner explanation: "Counter manages the state, 
// but the parent decides how to display it."


function Counter({ render }) {
  const [count, setCount] = useState(0);

  return render({ count, increment: () => setCount(c => c + 1) });
}


function App1() {
  return (
    <Counter
      render={({ count, increment }) => (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Add</button>
        </div>
      )}
    />
  );
}


function App2() {
  return (
    <Counter
      render={({ count, increment }) => (
        <p onClick={increment}>Clicked {count} times</p>
      )}
    />
  );
}


function App3() {
  return (
    <Counter
      render={({ count, increment }) => (
        <button onClick={increment}>🚀 {count}</button>
      )}
    />
  );
}

function App4() {
  return (
    <Counter
      render={({ count, increment }) => (
        <div onClick={increment}>
          <div style={{ width: `${count * 10}%`, background: 'green', height: 20 }} />
        </div>
      )}
    />
  );
}