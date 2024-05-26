import React from "react";
import Navbar from "../component/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMenu = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "",
    imageUrl: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMenu = async () => {
    const payload = {
      name: form.name,
      description: form.description,
      type: form.type,
      imageUrl: form.imageUrl,
      price: parseInt(form.price),
    };
    // console.log(payload);
    try {
      const token = localStorage.getItem("access_token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "https://api.mudoapi.tech/menu",
        payload,
        config
      );
      //   console.log(response.data.data);

      navigate("/");
    } catch (error) {
      console.log(error.response.message);
    }
  };
  return (
    <div>
      <div>
        <Navbar />
        <h1>Add Menu Page</h1>
        <label htmlFor="">Nama</label>
        <input
          type="text"
          placeholder="nama"
          name="name"
          id="name"
          onChange={handleChange}
        />
        <label htmlFor="">Deskripsi</label>
        <input
          type="text"
          placeholder="deskripsi"
          name="description"
          id="description"
          onChange={handleChange}
        />
        <label htmlFor="">Type</label>
        <input
          type="text"
          placeholder="type"
          name="type"
          id="type"
          onChange={handleChange}
        />
        <label htmlFor="">Image</label>
        <input
          type="text"
          placeholder="image Url"
          name="imageUrl"
          id="image"
          onChange={handleChange}
        />
        <label htmlFor="">Price</label>
        <input
          type="number"
          placeholder="price"
          name="price"
          id="price"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleAddMenu}>Add</button>
    </div>
  );
};

export default AddMenu;
