import { useState } from "react";

const data = [
  {
    question: "q1",
    answer: "a1",
  },
  {
    question: "q2",
    answer: "a2",
  },
  {
    question: "q3",
    answer: "a3",
  },
];

const FAQComponent = () => {
  const [idx, seOpenIdx] = useState([0]);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h3>Question ::: {item.question}</h3>
          {idx.includes(index) && <p>Answer ::: {item.answer}</p>}
          <button
            onClick={() => {
              if (idx.includes(index)) {
                seOpenIdx((prevArr) => {
                  const filterdItem = prevArr.filter((item) => item !== index);
                  return filterdItem;
                });
              } else {
                seOpenIdx((prevArr) => {
                  return [...prevArr, index];
                });
              }
            }}
          >
            Click
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
