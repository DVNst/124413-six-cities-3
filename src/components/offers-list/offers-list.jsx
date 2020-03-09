import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

const OffersList = (props) => {
  const {offers, mainClassName, onCardMouseOver, onPlaceCardTitleClick} = props;

  return (
    <Fragment>
      {offers.map((offer, index) => (
        <OfferCard
          key={`${offer.placeName}-${index}`}
          offer={offer}
          mainClassName={mainClassName}
          onPlaceCardTitleClick={onPlaceCardTitleClick}
          onCardMouseOver={onCardMouseOver}
        />
      ))}
    </Fragment>
  );
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  mainClassName: PropTypes.string,
  onCardMouseOver: PropTypes.func.isRequired,
  onPlaceCardTitleClick: PropTypes.func.isRequired,
};

OffersList.defaultProps = {
  mainClassName: `cities`
};

export default OffersList;
