import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Chevrolet from "./Components/Chevroletcar/Chevroletcar"
import Ladacar from "./Components/Ladacar/Ladacar"
import Lambarghinicar from "./Components/Lambarghinicar/Lambarghinicar"
import Ferrarecar from "./Components/Ferrarecar/Ferrarecar";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chevroletcar" element={<Chevrolet/>} />
        <Route path="/ladacar" element={<Ladacar/>} />
        <Route path="/lambarghinicar" element={<Lambarghinicar/>} />
        <Route path="/ferrarecar" element={<Ferrarecar/>} />
      </Routes>
    </div>
  );
}

export default App;
