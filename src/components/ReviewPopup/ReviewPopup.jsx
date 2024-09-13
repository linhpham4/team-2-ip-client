import "./ReviewPopup.scss";
import guitar from "../../assets/images/guitar.jpg";
import icon from "../../assets/images/reviewer-profile-icon.svg";
import rating from "../../assets/images/5star.svg";
import Button from "../Button/Button";
import x from "../../assets/images/x.svg";
import reason from "../../assets/images/reason-question.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


const ReviewPopup = ({ onClose, handleSubmit }) => {
  const [feedbackType, setFeedbackType] = useState(null);
  const [textareaValue, setTextareaValue] = useState("");
  const [review, setReview] = useState(null);
  const [reviewList, setReviewList] = useState({});

  const API_URL = import.meta.env.VITE_APP_BASE_URL
  const { id } = useParams();

  const getReviewData = async () => {
    try {
      const response = await axios.get(`${API_URL}/reviews/${id}`)
      setReview(response.data)

    } catch (error) {
      console.log(`Error fetching reviews data: ${error}`);
    }
  }

  useEffect(() => {
    getReviewData();
  }, [id])

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

  const handleFormSubmit = () => {
    if (textareaValue.trim()) {
      handleSubmit();
      onClose();
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
            <p className="reviewpopup__review-title">
              {review.review_headline}
            </p>
            <p className="reviewpopup__review">
              {review.review_body}
            </p>
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
                  onClick={() => handleButtonClick("helpful")}
                />
                <div className="divider"></div>
                <Button
                  className="button--bordered"
                  text="Not Helpful"
                  onClick={() => handleButtonClick("notHelpful")}
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
              <textarea
                className="reviewpopup__textarea"
                value={textareaValue}
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
                  onClick={handleFormSubmit}
                />
              </div>
            </>
          )}
        </div>

      </div>
    </>
  );
};

export default ReviewPopup;
