import "./HomePage.scss";
import SideBar from "../../components/SideBar/SideBar";
import home from "../../assets/images/vine-landing-page.jpg";

const HomePage = ({ popUp, handleClosePopup }) => {
  return (
    <>
      <img src={home} alt="home page" className="homepage__hero" />
      {popUp && <SideBar onClose={handleClosePopup} />}
    </>
  );
};

export default HomePage;
