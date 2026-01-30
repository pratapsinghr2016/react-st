import { useCallback, useEffect, useState } from "react";

const PAGE_SIZE = 10;
const totalPages = 100;

const dataArr = Array.from({ length: totalPages }, (_, idx) => idx + 1);

const InfiniteScroll = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(PAGE_SIZE);
  const [data, setData] = useState([]);

  const fetchData = useCallback(() => {
    const slicedArr = dataArr.slice(start, end);
    console.log("pppppp", slicedArr);
    setData((prev) => {
      const newArr = [...prev, ...slicedArr];
      return newArr;
    });
  }, [start, end]);

  useEffect(() => {
    fetchData();
  }, [start, end]);

  useEffect(() => {
    const fetchMore = () => {
      if (data.length === totalPages) {
        return;
      }
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight > scrollHeight - 100) {
        setStart((prev) => prev + PAGE_SIZE);
        setEnd((prev) => prev + PAGE_SIZE);
      }
    };

    window.addEventListener("scroll", fetchMore);

    return () => window.removeEventListener("scroll", fetchMore);
  }, [fetchData, start, end]);

  console.log(data);
  return (
    <div className="app-container">
      <div className="list-item-container">
        {data.map((item) => (
          <span key={item} className="list-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
