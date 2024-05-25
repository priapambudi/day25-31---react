import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [datas, setDatas] = useState([]);

  const getDatas = async () => {
    try {
      const res = await axios.get("https://api.mudoapi.tech/menus");
      setDatas(res.data.data.Data);
    } catch (error) {
      console.log(error);
    }
    // axios
    //   .get("https://api.mudoapi.tech/menus")
    //   .then((res) => {
    //     setDatas(res.data.data.Data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <Navbar />
      {datas.map((data) => {
        return (
          <Link to={`/menu/${data.id}`} key={data.id}>
            <h1>{data.name}</h1>
            <p>{data.priceFormatted}</p>
            <img width={300} src={data.imageUrl} alt="" />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
