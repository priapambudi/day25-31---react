import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
  });

  const getData = () => {
    axios
      .get(
        `https://api.mudoapi.tech/menus?perPage=5&page=${pagination.currentPage}`
      )
      .then((res) => {
        // console.log(res.data.data.Data);
        setData(res.data.data.Data);

        const pagination = {
          total: res.data.data.total,
          perPage: res.data.data.perPage,
          currentPage: res.data.data.currentPage,
          nextpage: res.data.data.nextPage,
        };

        setPagination(pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [pagination.currentPage]);

  const handleNext = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    });
  };

  const handelPrev = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage - 1,
    });
  };

  return (
    <div className="app">
      {data.map((item) => (
        <div key={item.id} className="card">
          <h1>{item.name}</h1>
          <p>{item.price}</p>
        </div>
      ))}
      <div>
        <button onClick={handelPrev}>Prev</button>
        <p>{pagination.currentPage}</p>
        <button disabled={pagination.nextPage === 0} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
