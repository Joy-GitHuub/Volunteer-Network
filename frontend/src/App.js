import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import RegisterEvent from "./Pages/RegisterEvent/RegisterEvent";
import Private from './Pages/Private/Private';
import MyEvents from "./Pages/MyEvents/MyEvents";
import Donation from './Pages/Donation/Donation';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <Home />
        }></Route>
        <Route path="/event/:eventId" element={<Private><RegisterEvent /></Private>}></Route>
        <Route path="/myEvents" element={<Private><MyEvents /></Private>}></Route>
        <Route path="/donation" element={<Private><Donation /></Private>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
