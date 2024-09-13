import "./ReviewsList.scss";

const ReviewsList = ({ handleOpenClick, reviewHeadline, reviewTimestamp, reviewBody, }) => {

  let date = new Date(reviewTimestamp * 1000);
  let reviewDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="reviewlist" onClick={handleOpenClick}>
      <div className="reviewlist__header">
        <div className="reviewlist__left-container">
          <h3 className="reviewlist__review-title">{reviewHeadline}</h3>
          <div className="reviewlist__review-details">
            <p className="reviewlist__timestamp">
              Reviewed in Canada on {reviewDate}
            </p>
            <p className="reviewlist__verified">Verified Purchase</p>
          </div>
        </div>
        <p className="reviewlist__credit">$5.25 Amazon Credit</p>
      </div>

      <div className="reviewlist__review-container-bottom">
        <p className="reviewlist__review-container-preview">{reviewBody}</p>
      </div>
    </div>
  );
};

export default ReviewsList;
