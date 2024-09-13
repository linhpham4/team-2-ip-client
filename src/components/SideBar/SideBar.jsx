import "./SideBar.scss";
import chevron from "../../assets/images/chevron.svg";
import mockavatar from "../../assets/images/mock-avatar.svg";
import { Link } from "react-router-dom";

const SideBar = ({ onClose }) => {
  return (
    <>
      <div className="sidebar__overlay" onClick={onClose}></div>

      <div className="sidebar">
        <div className="sidebar__header">
          <img src={mockavatar} alt="icon" className="sidebar__img" />
          <h3 className="sidebar__hello">Hello, John</h3>
        </div>

        <div className="sidebar__section">
          <h4 className="sidebar__section-header">Digital Content & Devices</h4>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Prime Video</p>
            <img src={chevron} alt="right" className="sidebar__icon" />
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Amazon Music</p>
            <img src={chevron} alt="right" className="sidebar__icon" />
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Kindle E-readers & Books</p>
            <img src={chevron} alt="right" className="sidebar__icon" />
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Amazon Appstore</p>
            <img src={chevron} alt="right" className="sidebar__icon" />
          </div>
        </div>

        <div className="sidebar__section">
          <h4 className="sidebar__section-header">Shop by Department</h4>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Electronics</p>
            <img src={chevron} alt="right" className="sidebar__icon" />
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Computers</p>
            <img src={chevron} alt="right" className="sidebar__icon" />
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Smart Home</p>
            <img src={chevron} alt="right" className="sidebar__icon" />
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Arts & Crafts</p>
            <img src={chevron} alt="right" className="sidebar__icon" />
          </div>
        </div>

        <div className="sidebar__section">
          <h4 className="sidebar__section-header">Programs & Features</h4>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Gift Cards</p>
            <img src={chevron} alt="right" className="sidebar__icon" />
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Shop By Interest</p>
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Amazon Live</p>
            <img src={chevron} alt="right" className="sidebar__icon" />
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">International Shopping</p>
            <img src={chevron} alt="right" className="sidebar__icon" />
          </div>
        </div>

        <div className="sidebar__section">
          <h4 className="sidebar__section-header">Amazon Vine</h4>
          <div className="sidebar__item-container">
            <Link to="/reviews" className="sidebar__link">
              <p className="sidebar__item">Review Feedback</p>
            </Link>
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Payments</p>
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Transfer Funds</p>
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Referrals</p>
          </div>
          <div className="sidebar__item-container">
            <p className="sidebar__item">Inbox</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
