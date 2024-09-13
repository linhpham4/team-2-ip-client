import "./FeedBackPage.scss";
import hero from "../../assets/images/new-hero.svg";
import tabs from "../../assets/images/new-tabs.svg";
import input from "../../assets/images/input.svg";
import conf from "../../assets/images/confirmation.svg";
import ReviewPopup from "../../components/ReviewPopup/ReviewPopup";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import axios from "axios";
import { useState, useEffect } from "react";

const FeedBackPage = ({ popUp, handleClosePopup, handleOpenClick }) => {
  const [reviews, setReviews] = useState([]);
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const getReviews = async () => {
    const response = await axios.get(`${baseUrl}/reviews`);
    setReviews(response.data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  if (!reviews) {
    <h1>Loading...</h1>;
  }

  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleSubmit = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 4000);
  };

  return (
    <>
      <div className="feedbackpage">
        <div className="feedbackpage__hero-container">
          <img src={hero} alt="hero" className="feedbackpage__hero" />
          <img src={tabs} alt="tabs" className="feedbackpage__tabs" />
        </div>
        <div className="feedbackpage__section-header-container">
          <h1 className="feedbackpage__section-header">Reviews</h1>
          <img src={input} alt="input" className="feedbackpage__search" />
        </div>

        {/* Dynamic Review List */}
        {reviews.map((review) => (
          <ReviewsList
            key={review.id}
            handleOpenClick={handleOpenClick}
            reviewHeadline={review.review_headline}
            reviewBody={review.review_body}
          />
        ))}
        
      </div>
      {popUp && (
        <ReviewPopup onClose={handleClosePopup} handleSubmit={handleSubmit} />
      )}
      {showConfirmation && (
        <img
          src={conf}
          alt="review uploaded"
          className="feedbackpage__confirmation"
        />
      )}
    </>
  );
};
export default FeedBackPage;
