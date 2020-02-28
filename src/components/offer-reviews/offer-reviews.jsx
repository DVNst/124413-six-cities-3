import React, {Fragment} from "react";
import PropTypes from "prop-types";
import OfferReview from "../offer-review/offer-review.jsx";
import reviews from "../../mocks/review.js";

const OfferReviews = (props) => {
  const {offer} = props;
  const _reviews = reviews.filter((review) => {
    return review.id === offer.id;
  });

  return (
    <Fragment>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{_reviews.length}</span></h2>
      <ul className="reviews__list">
        {_reviews.map((review, index) => (
          <OfferReview
            key={`${review.text}-${index}`}
            review={review}
          />
        ))}
      </ul>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

OfferReviews.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    type: PropTypes.string,
    price: PropTypes.number.isRequired,
    period: PropTypes.string,
    rating: PropTypes.number,
    mark: PropTypes.string,
    img: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default OfferReviews;
