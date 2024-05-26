import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailMenu = () => {
  const param = useParams();
  //   console.log(param.id);

  const [menus, setMenu] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(
        `https://api.mudoapi.tech/menu/${param.id}`,
        config
      );
      navigate("/");
      // console.log(response);
    } catch (error) {
      console.log(error.response.message);
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
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default DetailMenu;
