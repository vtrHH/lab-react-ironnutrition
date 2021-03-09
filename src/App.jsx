import React, { Component } from 'react';
import './App.scss';

import meals from './meals';

import MealBox from './components/MealBox';
import AddMeal from './components/AddMeal';
import Search from './components/Search';

class App extends Component {
  state = {
    meals: meals,
    keyword: '',
    active: false
  };

  toggleMealForm = (event) => {
    this.setState({ active: !this.state.active });
  };

  handleKeywordChange = (keyword) => {
    this.setState({ keyword: keyword });
  };

  createMeal = (meal) => {
    this.setState({ meals: [meal, ...this.state.meals] });
  };

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <Search
          onKeywordChange={this.handleKeywordChange}
          keyword={this.state.keyword}
        />
        <ul>
          {this.state.meals
            .filter((meal) =>
              meal.name.toLowerCase().includes(this.state.keyword.toLowerCase())
            )
            .map((meal) => (
              <MealBox key={meal.image} meal={meal} />
            ))}
        </ul>
        <button onClick={this.toggleMealForm}>Add a new meal</button>
        {this.state.active && (
          <AddMeal
            onMealCreate={this.createMeal}
            onMealAdded={this.toggleMealForm}
          />
        )}
      </div>
    );
  }
}

export default App;
