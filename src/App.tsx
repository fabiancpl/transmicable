import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "rsuite/dist/rsuite.min.css";
import NavbarTransmicable from "./components/shared/navbar/NavbarTransmicable.tsx";
import Home from "./components/home/Home.tsx";

function App() {
  return (
    <>
      <NavbarTransmicable />
      <Home />
    </>
  );
}

export default App;
