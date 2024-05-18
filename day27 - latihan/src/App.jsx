import { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  // state
  // const [age, setAge] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  // variable
  // let thisYear = new Date().getFullYear();
  // let bornYear = 1997;

  // const calculateAge = () => {
  //   setAge(thisYear - bornYear);
  // };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      {/* <h1>{age}</h1>
      <button onClick={calculateAge}>calculate my age</button> */}

      {!showSidebar && (
        <button
          onClick={toggleSidebar}
          style={{
            transform: "rotate(90deg)",
            marginBottom: "10px",
            backgroundColor: "pink",
          }}
        >
          |||
        </button>
      )}

      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default App;
