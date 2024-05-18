import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState({});

  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res?.data);
        const response = res?.data;
        setUsers(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserDetail = () => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((res) => {
        console.log(res?.data?.data);
        const response = res?.data?.data;
        setUserDetail(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
    getUserDetail();
  }, []);

  return (
    <div>
      <h1>{userDetail.first_name}</h1>
      <img src={userDetail.avatar} alt="" />

      {users.map((item) => (
        <div key={item?.id}>
          <h1>{item?.name}</h1>
          <p>{item?.email}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
