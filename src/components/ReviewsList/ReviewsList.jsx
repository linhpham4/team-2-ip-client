import "./ReviewsList.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const ReviewsList = ({ handleOpenClick }) => {

const [reviews, setReviews] = useState([]);
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const getReviews = async() => {
  const response = await axios.get(`${baseUrl}/reviews`);
  setReviews(response.data);
}

useEffect(() => {
  getReviews();
}, []);

if (!reviews) {
  <h1>Loading...</h1>
}

  return (
    <div className="reviewlist" onClick={handleOpenClick}>
      <div className="reviewlist__header">
        <div className="reviewlist__left-container">
          <h3 className="reviewlist__review-title">
            Strings are garbage but not a bad guitar
          </h3>
          <div className="reviewlist__review-details">
            <p className="reviewlist__timestamp">
              Reviewed in Canada on June 21, 2024
            </p>
            <p className="reviewlist__verified">Verified Purchase</p>
          </div>
        </div>
        <p className="reviewlist__credit">$5.25 Amazon Credit</p>
      </div>

      <div className="reviewlist__review-container-bottom">
        <p className="reviewlist__review-container-preview">
          The strings seemed cheap despite the advertisement that they were from
          a quality string company. Watched a quick youtube video and replaced
          the strings myself with better ones. All in all not a bad little
        </p>
      </div>
    </div>
  );
};

export default ReviewsList;
