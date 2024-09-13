import "./HomePage.scss";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import headerbar from "../../assets/images/nav.svg";
import home from "../../assets/images/vine-landing-page.jpg";
import { useState } from "react";

const HomePage = () => {
  const [popUp, setPopup] = useState(false);

  const handleOpenClick = () => {
    setPopup(true);
  };

  const handleClosePopup = () => {
    setPopup(false);
  };

  return (
    <>
      <div className="homepage">
        <Header />
        <img
          src={headerbar}
          className="homepage__header-bar"
          alt="header bar"
          onClick={handleOpenClick}
        />
      </div>
      <img src={home} alt="home page" className="homepage__hero" />
      {popUp && <SideBar onClose={handleClosePopup} />}
    </>
  );
};
export default HomePage;
