import { Routes, Route } from "react-router-dom";
import Signup from "./components/SignUP";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
