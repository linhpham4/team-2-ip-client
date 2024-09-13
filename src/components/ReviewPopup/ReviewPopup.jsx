import "./ReviewPopup.scss";
import guitar from "../../assets/images/guitar.jpg";
import icon from "../../assets/images/reviewer-profile-icon.svg";
import rating from "../../assets/images/5star.svg";
import Button from "../Button/Button";
import x from "../../assets/images/x.svg";

const ReviewPopup = ({ onClose }) => {
  return (
    <>
      <div className="sidebar__overlay" onClick={onClose}></div>

      <img src={x} alt="" className="reviewpopup__close-icon" />
      <div className="reviewpopup">
        <img src={guitar} alt="guitar" className="reviewpopup__img" />
        <div className="reviewpopup__container">
          <div className="reviewpopup__reviewer">
            <img src={icon} alt="icon" className="reviewpopup__icon" />
            <p className="reviewpopup__name">Ayla</p>
          </div>
          <div className="reviewpopup__rv">
            <img src={rating} alt="" className="reviewpopup__rating" />
            <p className="feedbackpage__verified">Verified purchase</p>
          </div>
          <p className="feedbackpage__timestamp">
            Reviewed in Canada on June 21, 2024
          </p>
          <p className="reviewpopup__review-title">
            Strings are garbage but not a bad guitar
          </p>
          <p className="reviewpopup__review">
            The strings seemed cheap despite the advertisement that they were
            from a quality string company. Watched a quick youtube video and
            replaced the strings myself with better ones. All in all not a bad
            uke, I am happy with it to learn on.
          </p>
          <img src={guitar} alt="guitar" className="reviewpopup__thumbnail" />
          <h3 className="reviewpopup__question">
            How did you find this review?
          </h3>
          <div className="reviewpopup__button-container">
            <Button className="button--bordered" text="Helpful" />
            <Button className="button--bordered" text="Not Helpful" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ReviewPopup;
