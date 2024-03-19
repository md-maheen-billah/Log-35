import "./App.css";
// import DaisyNavbar from "./components/DaisyNavbar/DaisyNavbar";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import LineChar from "./components/LineChar/LineChar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNavbar></DaisyNavbar> */}
      <PriceOptions></PriceOptions>
      <LineChar></LineChar>
    </>
  );
}

export default App;
