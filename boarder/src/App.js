import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
// import Userinfo from "./Components/Userinfo/Userinfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
         {/* <Route path="/" elemant={<Userinfo />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
