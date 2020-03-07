import React, {Fragment} from "react";
import PropTypes from "prop-types";

const CityList = (props) => {
  const {cities, cityActive, onCityNameClick} = props;

  return (
    <Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((cityName) => (
              <li className="locations__item" key={`${cityName}`}>
                <a
                  href="#"
                  className={`locations__item-link tabs__item${(cityName === cityActive) ? ` tabs__item--active` : ``}`}
                  onClick={() => {
                    onCityNameClick(cityName);
                  }}
                >
                  <span>{cityName}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Fragment>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  cityActive: PropTypes.string.isRequired,
  onCityNameClick: PropTypes.func.isRequired
};

export default CityList;
