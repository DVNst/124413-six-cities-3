import React, {Fragment} from "react";
import PropTypes from "prop-types";

const OfferCard = (props) => {
  const {offer, onPlaceCardTitleClick, onCardMouseOver} = props;
  const {placeName, type, price, period, rating, mark, img} = offer;
  const RATING_STARS = Math.round(rating) * 20;

  function _renderMark() {
    return mark ?
      <Fragment>
        <div className="place-card__mark">
          <span>{mark}</span>
        </div>
      </Fragment> : null;
  }

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => {
        onCardMouseOver(offer);
      }}
      onMouseLeave={() => {
        onCardMouseOver(null);
      }}
    >
      {_renderMark()}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{period}</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${RATING_STARS}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name"
          onClick={() => {
            onPlaceCardTitleClick(offer);
          }}>
          <a href="#">{placeName}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
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
  onPlaceCardTitleClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};

export default OfferCard;
