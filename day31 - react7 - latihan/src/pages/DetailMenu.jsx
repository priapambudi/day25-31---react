import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const DetailMenu = () => {
  const param = useParams();
  //   console.log(param.id);

  const [menus, setMenu] = useState({});

  const getDetail = async () => {
    try {
      const response = await axios.get(
        `
        https://api.mudoapi.tech/menu/${param.id}`
      );
      //   console.log(response.data.data);

      setMenu(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <h1>detail halaman</h1>

      <div>
        <h1>{menus.name}</h1>
        <img width={300} src={menus.imageUrl} alt="" />
        <p>{menus.description}</p>
        <p>{menus.type}</p>
        <p>${menus.price}</p>
      </div>
    </div>
  );
};

export default DetailMenu;
