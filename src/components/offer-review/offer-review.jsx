import React from "react";
import PropTypes from "prop-types";

const OfferReview = (props) => {
  const {review} = props;
  const {userName, text, rating, date} = review;
  const RATING_STARS = Math.round(rating) * 20;
  const REVIEWS_TIME = new Date(date);
  const MONTH = REVIEWS_TIME.toLocaleString(`eng`, {month: `long`});
  const YEAR = REVIEWS_TIME.getFullYear();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${RATING_STARS}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date}>{`${MONTH} ${YEAR}`}</time>
      </div>
    </li>
  );
};

OfferReview.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    userName: PropTypes.string,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default OfferReview;
