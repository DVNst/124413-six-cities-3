import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OfferCards extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerOver: null,
    };
  }

  render() {
    const {offers, onPlaceCardTitleClick, onCardMouseOver} = this.props;

    return (
      <Fragment>
        {offers.map((offer, index) => (
          <OfferCard
            key={`${offer.placeName}-${index}`}
            offer={offer}
            onPlaceCardTitleClick={onPlaceCardTitleClick}
            onCardMouseOver={onCardMouseOver}
          />
        ))}
      </Fragment>
    );
  }
}

OfferCards.propTypes = {
  offers: PropTypes.array.isRequired,
  onPlaceCardTitleClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};