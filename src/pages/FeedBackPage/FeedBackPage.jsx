import "./FeedBackPage.scss";
import hero from "../../assets/images/feedbackpage-hero.svg";
import tabs from "../../assets/images/tabs.svg";
import input from "../../assets/images/input.svg";
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

        {reviews.map((review) => (
          <ReviewsList
            key={review.id}
            handleOpenClick={handleOpenClick}
            reviewHeadline={review.review_headline}
            reviewTimestamp={review.review_date}
            reviewBody={review.review_body}
          />
        ))}

        {/* <div className="feedbackpage__review-container">
          <div className="feedbackpage__review-container-top">
            <div className="feedbackpage__left-details">
              <h3
                className="feedbackpage__review-title"
                onClick={handleOpenClick}
              >
                Strings are garbage but not a bad guitar
              </h3>
              <div className="feedbackpage__review-details">
                <p className="feedbackpage__timestamp">
                  Reviewed in Canada on June 21, 2024
                </p>
                <p className="feedbackpage__verified">Verified Purchase</p>
              </div>
            </div>
            <p className="feedbackpage__credit">$5.25 Amazon Credit</p>
          </div>
          <div className="feedbackpage__review-container-bottom">
            <p className="feedbackpage__review-container-preview">
              The strings seemed cheap despite the advertisement that they were
              from a quality string company. Watched a quick youtube video and
              replaced the strings myself with better ones. All in all not a bad
              little
            </p>
          </div>
        </div> */}
      </div>
      {popUp && <ReviewPopup onClose={handleClosePopup} />}
    </>
  );
};
export default FeedBackPage;
