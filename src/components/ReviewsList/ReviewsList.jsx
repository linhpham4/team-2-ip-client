import "./ReviewsList.scss";

const ReviewsList = ({ handleOpenClick, reviewHeadline, reviewBody, }) => {

  return (
    <div className="reviewlist" onClick={handleOpenClick}>
      <div className="reviewlist__header">
        <div className="reviewlist__left-container">
          <h3 className="reviewlist__review-title">{reviewHeadline}</h3>
        </div>
        <p className="reviewlist__credit">$5.25 Amazon Credit</p>
      </div>

      <div className="reviewlist__review-container-bottom">
        <p className="reviewlist__review-container-preview">{reviewBody}</p>∂
      </div>
    </div>
  );
};

export default ReviewsList;
