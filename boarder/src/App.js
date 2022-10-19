import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
// import Userinfo from "./Components/Userinfo/Userinfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
         {/* <Route path="/" elemant={<Userinfo />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
