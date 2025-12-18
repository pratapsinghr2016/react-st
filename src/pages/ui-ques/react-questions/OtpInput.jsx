import { useRef, useState } from "react";
import "./styles/otp-styles.css";

const OTP_LENGTH = 4;
const OtpInput = () => {
  const [otp, setOtp] = useState([]); // type array --> remember
  const inputRef = useRef([]); // remember

  const inputChangeHandler = (e) => {
    const id = Number(e.target.id);
    const value = e.target.value;
    if (id <= OTP_LENGTH) {
      const currentElement = inputRef?.current[id + 1] ?? inputRef.current[id];
      currentElement.focus();
      inputRef.current[id].value = value;
      setOtp((prev) => {
        prev[id] = value;
        const newPrev = [...prev];
        console.log("prev:::", newPrev);
        return newPrev;
      });
    }
  };

  const setElements = (element, index) => {
    if (inputRef?.current) inputRef.current[index] = element;
  };

  const onPasteHandler = (e) => {
    e.preventDefault(); // i failed here... remember !!!
    const targetId = Number(e.target.id);
    if (targetId !== 0) return;
    console.log("targetId", targetId);
    const text = e.clipboardData.getData("text/plain");

    const validOtp = text.split("").slice(0, OTP_LENGTH);
    console.log("e-->", e, text, validOtp);
    let count = 0;
    for (let element of validOtp) {
      console.log("element", element, count);
      inputChangeHandler({ target: { id: count, value: element } });
      count += 1;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP", otp);
  };

  return (
    <div className="otp-container">
      <form onSubmit={handleSubmit}>
        {Array.from({ length: OTP_LENGTH }).map((i, index) => (
          <input
            ref={(el) => setElements(el, index)} // remember
            onChange={inputChangeHandler}
            onPaste={onPasteHandler}
            className="otp-field"
            id={index}
            key={index}
          />
        ))}
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default OtpInput;
