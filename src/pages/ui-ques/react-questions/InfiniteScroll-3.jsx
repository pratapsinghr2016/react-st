import { useEffect, useRef, useState } from "react";


/* 
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item-box {
  border: 2px solid black;
  width: 20rem;
  height: 30rem;
  margin-top: 1rem;
}


*/


const total = 1000;
const dataArr = Array.from({ length: total }, (_, idx) => idx + 1);

const PAGE_SIZE = 20;

const InfiniteScroll = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(PAGE_SIZE);
  const [data, setData] = useState([]);

  const sentinalRef = useRef();

  const fetchData = () => {
    setData((prev) => {
      const slicedArr = dataArr.slice(start, end);
      const newArr = [...prev, ...slicedArr];
      return newArr;
    });
  };

  useEffect(() => {
    fetchData();
  }, [start, end]);

  useEffect(() => {
    const observer = new IntersectionObserver(([items]) => {
      if (items.isIntersecting) {
        setStart((prev) => prev + PAGE_SIZE);
        setEnd((prev) => prev + PAGE_SIZE);
      }
    });

    if (sentinalRef.current) observer.observe(sentinalRef.current);

    return () => observer?.disconnect(sentinalRef);
  }, []);

  return (
    <div className="app-container">
      {data.map((item) => (
        <span className="item-box" key={item}>
          {item}
        </span>
      ))}
      <div ref={sentinalRef}>Loading...</div>
    </div>
  );
};

export default InfiniteScroll;
