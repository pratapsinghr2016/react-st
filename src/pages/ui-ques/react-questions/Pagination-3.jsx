// https://dummyjson.com/products?limit=10&skip=10

import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/products";
const PAGE_SIZE = 10;

const Pagination = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    setLoading(true);

    const skip = (currPage - 1) * PAGE_SIZE;

    const res = await fetch(
      skip ? `${URL}?limit=${PAGE_SIZE}&skip=${skip}` : URL
    );
    const { products, total } = await res.json();

    const totalPagesCount = Math.ceil(total / PAGE_SIZE);

    setTotalPages(totalPagesCount);
    setData(products);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [currPage]);

  const getPages = (curr, total) => {
    let res = [];
    const buffer = 2;

    for (let i = 1; i < total; i++) {
      if (
        i === 1 ||
        i === total - 1 ||
        (i >= curr - buffer && i <= curr + buffer)
      ) {
        res.push(i);
      } else if (res[res.length - 1] !== "...") {
        res.push("...");
      }
    }
    console.log(res);
    return res;
    // return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  };

  const handlePrev = () => {
    setCurrPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrPage((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      <div className="pagination">
        <button onClick={handlePrev} disabled={currPage === 1}>
          Prev
        </button>
        {loading ? <spna>Loading...</spna> : null}
        {getPages(currPage, totalPages).map((item) => {
          if (item === "...") return <span>...</span>;
          return (
            <button
              key={item}
              style={{ background: item === currPage ? "blue" : "" }}
              onClick={() => setCurrPage(item)}
            >
              {item}
            </button>
          );
        })}
        <button onClick={handleNext} disabled={currPage === totalPages - 1}>
          Next
        </button>
      </div>
      {data.map((item) => (
        <div key={item.id} className="list-container">
          <img src={item.images[0]} alt={item.title} height={150} width={150} />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
