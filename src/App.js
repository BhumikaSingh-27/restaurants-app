
import "./App.css";
import Home from "./Pages/Home";

import { Route, Routes } from "react-router-dom";
import SinglePage from "./Pages/SinglePage";


function App() {
  

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/singlePage/:restId" element={<SinglePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
