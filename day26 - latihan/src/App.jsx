import NavList from "./components/NavList";
import NavLogo from "./components/NavLogo";
import "./style.css";
import LogoImage from "./assets/Amazon.png";

const App = () => {
  const linkList = ["Home", "About", "Contact"];

  const handleLogin = () => {
    console.log("Login");
  };

  const handleRedirect = (item) => {
    console.log(`event redirect to ${item}`);
  };

  return (
    <div>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <NavLogo title={LogoImage} />
          <NavList data={linkList} handleRedirect={handleRedirect} />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default App;
