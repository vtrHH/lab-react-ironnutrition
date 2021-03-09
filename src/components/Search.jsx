import React from 'react';
import meals from '../meals.json';

class Search extends React.Component {
  state = {
    meals: meals
  };

  handleKeywordChange = (event) => {
    const value = event.target.value;
    this.props.onKeywordChange(value);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Type in what you are looking for..."
        value={this.props.keyword}
        onChange={this.handleKeywordChange}
      />
    );
  }
}

export default Search;
