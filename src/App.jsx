import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import FeedBackPage from "./pages/FeedBackPage/FeedBackPage";
import headerbar from "../src/assets/images/nav.svg";
import Header from "./components/Header/Header";
import ReviewPopup from "./components/ReviewPopup/ReviewPopup";

function App() {
  const [popUp, setPopup] = useState(false);

  const handleOpenClick = () => {
    setPopup(true);
  };

  const handleClosePopup = () => {
    setPopup(false);
  };

  return (
    <Router>
      <div className="homepage">
        <Header />
        <img
          src={headerbar}
          className="homepage__header-bar"
          alt="header bar"
          onClick={handleOpenClick}
        />
      </div>
      <Routes>
        {/* <Route
          path="/"
          element={
            <HomePage popUp={popUp} handleClosePopup={handleClosePopup} />
          }
        /> */}
        <Route
          path="/"
          element={
            <FeedBackPage
              popUp={popUp}
              handleClosePopup={handleClosePopup}
              handleOpenClick={handleOpenClick}
            />
          }
        />
        <Route
          path="/reviews/:id"
          element={
            <ReviewPopup
              popUp={popUp}
              handleClosePopup={handleClosePopup}
              handleOpenClick={handleOpenClick}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
