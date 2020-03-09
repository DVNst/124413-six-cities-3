import React from "react";
import PropTypes from "prop-types";

let sortOptionActive = 0; // Popular

const SortingOptions = (props) => {
  const {offers, onSortOptionClick} = props;

  function _handlerShowSortMenu(evt) {
    evt.preventDefault();
    const sortMenu = document.querySelector(`#places-sorting`);
    sortMenu.classList.toggle(`places__options--opened`);
  }

  function _handlerSelectSortOption(evt) {
    evt.preventDefault();
    const sortMenu = document.querySelector(`#places-sorting`);
    const sortMenuTitle = document.getElementsByClassName(`places__sorting-type`);
    const newSortOptionActive = Array.prototype.indexOf.call(sortMenu.querySelectorAll(`li`), evt.target);

    // вставляем значение выбраной сортировки в childNodes[0], чтобы не удалить декоративную стрелку
    sortMenuTitle[0].childNodes[0].textContent = evt.target.textContent;

    // удаляем класс для отображения списка опций сортировки
    sortMenu.classList.remove(`places__options--opened`);

    // удаляем класс выделения выбранной опции сортировки у предыдущей выбраной опции
    sortMenu.childNodes[sortOptionActive].classList.remove(`places__option--active`);

    // добавляем класс выделения выбранной опции сортировки
    evt.target.classList.add(`places__option--active`);

    sortOptionActive = newSortOptionActive;
  }

  function filteredOffers() {
    switch (sortOptionActive) {
      case 0:
        return offers;
      case 1:
        return [].concat(offers).sort((offerPrev, offerNext) => (offerPrev.price > offerNext.price) ? 1 : -1);
      case 2:
        return [].concat(offers).sort((offerPrev, offerNext) => (offerPrev.price > offerNext.price) ? -1 : 1);
      case 3:
        return [].concat(offers).sort((offerPrev, offerNext) => (offerPrev.rating > offerNext.rating) ? -1 : 1);
      default:
        return offers;
    }
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={(evt) => _handlerShowSortMenu(evt)}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        id="places-sorting"
        className="places__options places__options--custom"
        onClick={(evt) => {
          _handlerSelectSortOption(evt);
          onSortOptionClick(filteredOffers());
        }}
      >
        <li className="places__option places__option--active" tabIndex="0">Popular</li>
        <li className="places__option" tabIndex="0">Price: low to high</li>
        <li className="places__option" tabIndex="0">Price: high to low</li>
        <li className="places__option" tabIndex="0">Top rated first</li>
      </ul>
    </form>
  );
};

SortingOptions.propTypes = {
  offers: PropTypes.array.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
};

export default SortingOptions;
