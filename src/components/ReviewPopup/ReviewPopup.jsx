import "./ReviewPopup.scss";
import guitar from "../../assets/images/guitar.jpg";
import rating from "../../assets/images/5star.svg";
import Button from "../Button/Button";
import x from "../../assets/images/x.svg";
import reason from "../../assets/images/reason-question.svg";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ReviewPopup = ({ onClose }) => {
  const [feedbackType, setFeedbackType] = useState(null);
  const [textareaValue, setTextareaValue] = useState("");
  const [review, setReview] = useState(null);


  const API_URL = import.meta.env.VITE_APP_BASE_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const getReviewData = async () => {
    try {
      const response = await axios.get(`${API_URL}/reviews/${id}`);
      setReview(response.data);
    } catch (error) {
      console.log(`Error fetching reviews data: ${error}`);
    }
  };

  useEffect(() => {
    getReviewData();
  }, [id]);

  if (!review) {
    return <p>Loading...</p>;
  }

  const handleButtonClick = (type) => {
    setFeedbackType(type);
  };

  const handleReasonClick = () => {
    setFeedbackType(null);
    setTextareaValue("");
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };


  
  const handleFormSubmit = async (event) => {
    try {
      // event.preventDefault();
      // await axios.post(`${API_URL}/vinereviews`, {
      //   "review_id": id,
      //   "user_id": review.user_id,
      //   "product_id": review.product_id,
      //   "review_star_rating": review.review_star_rating,
      //   "review_headline": review.review_headline,
      //   "review_body": review.review_body,
      //   "review_date": review.review_date,
      //   "vine_user_id": 1,
      //   "vine_helpful": feedbackType,
      //   "vine_explanation": event.target.value,
      // });
  
    alert("Review has been successfully submitted!");
    navigate("/feedback");
  
    } catch (error) {
      console.log(error)
    }

    
  };

  return (
    <>
      <div className="sidebar__overlay" onClick={onClose}></div>

      <img
        src={x}
        alt=""
        className="reviewpopup__close-icon"
        onClick={onClose}
      />

      <div className="reviewpopup">
        <img src={guitar} alt="guitar" className="reviewpopup__img" />
        <div className="reviewpopup__container">
          <div key={review.id} className="reviewpopup__wrap">
            <img src={rating} alt="star" />
            <p className="reviewpopup__review-title">
              {review.review_headline}
            </p>
            <p className="reviewpopup__review">{review.review_body}</p>
          </div>

          <img src={guitar} alt="guitar" className="reviewpopup__thumbnail" />

          {feedbackType === null ? (
            <>
              <h3 className="reviewpopup__question">
                How did you find this review?
              </h3>
              <div className="reviewpopup__button-container">
                <Button
                  className="button--bordered"
                  text="Helpful"
                  onClick={() => handleButtonClick(true)}
                />
                <div className="divider"></div>
                <Button
                  className="button--bordered"
                  text="Not Helpful"
                  onClick={() => handleButtonClick(false)}
                />
              </div>
            </>
          ) : (
            <>
              <img
                src={reason}
                alt="question"
                className="reviewpopup__question"
                onClick={handleReasonClick}
              />
              <form className="reviewpopup__form" onSubmit={handleFormSubmit}>
              <textarea
                className="reviewpopup__textarea"
                value={textareaValue}
                name="explanation"
                onChange={handleTextareaChange}
                placeholder={
                  feedbackType === "helpful"
                    ? "Why did you find this review helpful..."
                    : "Why did you find this review not helpful..."
                }
              />
              <div className="reviewpopup__button-container--right">
                <Button
                  className={
                    textareaValue.trim()
                      ? "button--active reviewpopup__button-container"
                      : "button--disabled reviewpopup__button-container"
                  }
                  text="Submit"
                />
              </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewPopup;
