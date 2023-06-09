import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./component/NotFound";
import Dashboard from "./component/Dashboard";
import Registration from "./component/Registration";
import Admin from "./component/Admin";
import RegistAdmin from "./component/RegistAdmin";
import Viewproduct from "./component/Viewproduct";
import Dashboards from "./component/Dashboards";
import Home from "./component/Home";
import Quise from "./component/Quise";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboards" element={<Dashboards />} />
        <Route path="/Quiz" element={<Quise/>} />
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/Registration" element={<Registration />} />
        <Route path="/RegistAdmin" element={<RegistAdmin />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Viewproduct" element={<Viewproduct />} />
        <Route path="/Dashboard" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
