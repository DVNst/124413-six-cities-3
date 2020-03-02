import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offerOver: null,
    };

    this._handlerCardMouseOver = this._handlerCardMouseOver.bind(this);
  }

  _handlerCardMouseOver(offer) {
    this.setState({
      offerOver: offer,
    });
  }

  render() {
    const {offers, mainClassName, onPlaceCardTitleClick} = this.props;

    return (
      <Fragment>
        {offers.map((offer, index) => (
          <OfferCard
            key={`${offer.placeName}-${index}`}
            offer={offer}
            mainClassName={mainClassName}
            onPlaceCardTitleClick={onPlaceCardTitleClick}
            onCardMouseOver={this._handlerCardMouseOver}
          />
        ))}
      </Fragment>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  mainClassName: PropTypes.string,
  onPlaceCardTitleClick: PropTypes.func.isRequired,
};

OffersList.defaultProps = {
  mainClassName: `cities`
};

export default OffersList;
