import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import Home from "./Pages/Home";
import FoodCard from "./components/Card/FoodCard";
import ReviewCard from "./components/Review/ReviewCard";
import Modal from "./components/Modal";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./Pages/SinglePage";
import { useContext } from "react";
import { DataContext } from "./contexts/DataContext";

function App() {
  const { isModal } = useContext(DataContext);

  return (
    <div className="App">
      {isModal && <Modal />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/singlePage/:restId" element={<SinglePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
