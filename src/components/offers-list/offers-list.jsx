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
    const {offers, MainClassName, onPlaceCardTitleClick} = this.props;

    return (
      <Fragment>
        {offers.map((offer, index) => (
          <OfferCard
            key={`${offer.placeName}-${index}`}
            offer={offer}
            MainClassName={MainClassName}
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
  MainClassName: PropTypes.string,
  onPlaceCardTitleClick: PropTypes.func.isRequired,
};

OffersList.defaultProps = {
  MainClassName: `cities`
};

export default OffersList;
