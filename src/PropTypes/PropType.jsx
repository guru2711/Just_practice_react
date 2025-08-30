import React from "react";
import PropTypes from "prop-types";

const App = ({ name, age, hasPet, favouriteFoods }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Has pet: {hasPet.toString()}</h2>
      <h2>Favorite foods</h2>
      <div>
        {favouriteFoods.map((f, index) => (
          <p key={index}>
            Food name: {f.foodName}, Is vegan: {f.isVegan.toString()}
          </p>
        ))}
      </div>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  hasPet: PropTypes.bool.isRequired,
  favouriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      foodName: PropTypes.string,
      isVegan: PropTypes.bool,
    })
  ),
};

export default App;
