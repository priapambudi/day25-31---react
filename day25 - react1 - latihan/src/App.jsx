import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

// function declaration
function App() {
  let name = "budi";
  let bornYear = 1997;
  let isSingle = true;

  const renderStatus = () => {
    if (isSingle) {
      return <h1>lajang</h1>;
    } else {
      return <h1>menikah</h1>;
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Hello, nama saya {name}</h1>
      <h1>Umur saya {2024 - bornYear}</h1>
      {/* <h1>Status: {renderStatus()}</h1> */}
      {renderStatus(isSingle)}
      <Banner />
      <Footer />
    </div>
  );
}

export default App;

// function expression pake cara export langsung
// export const App = () => {
//   return <h1>Hello, React!</h1>;
// };
