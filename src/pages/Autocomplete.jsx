import { useEffect, useState } from "react";

const _itemsList = [
  "apple",
  "apple-juice",
  "banana",
  "cactus",
  "daffodil",
  "egplant",
];

const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(() => _itemsList), 3000);
  });
};

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [doneIdx, setDoneIdx] = useState(-1);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        console.log("response", response);
        // we can adjust the IDs to resolve the bug at done button click
        setItemsList(response);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  const deleteHandler = (index) => {
    const filteredItem = itemsList.filter((str, idx) => idx !== index);
    setItemsList(filteredItem);
  };

  const doneHandler = (index) => {
    setDoneIdx(index);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {(!inputValue
          ? itemsList
          : itemsList.filter((item) => item.includes(inputValue))
        ).map((item, index) => (
          <div
            style={{
              backgroundColor: "cyan",
              display: "inline",
              width: 300,
              height: 50,
              border: "1px solid red",
              position: "relative",
              textAlign: "center",
            }}
            key={index}
          >
            <button
              style={{
                position: "absolute",
                left: 10,
                top: 10,
                cursor: "pointer",
              }}
              onClick={() => doneHandler(index)}
            >
              done
            </button>
            <p
              style={{
                textDecoration: doneIdx === index ? "line-through" : "",
              }}
            >
              {" "}
              {item}
            </p>
            <button
              style={{
                position: "absolute",
                right: 10,
                top: 10,
                cursor: "pointer",
              }}
              onClick={() => deleteHandler(index)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Autocomplete;
