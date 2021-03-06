import React from 'react';
import meals from './meals';

class Search extends React.Component {
  state = {
    meals: meals,
    keyword: ''
  };

  handleChangeOfSearchInput = (event) => {
    const value = event.target.value;
    console.log(value);
    const mealClone = [...this.state.meals];
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Type in what you are looking for..."
        value={this.state.keywords}
        onChange={this.handleChangeOfSearchInput}
      />
    );
  }
}

export default Search;
