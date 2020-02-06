import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {countOffers} = props;

  return (
    <Main
      countOffers={countOffers}
    />
  );
};

export default App;
