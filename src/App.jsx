import React, { Component } from 'react';
import './App.scss';

import meals from './meals';

import MealBox from './components/MealBox';
import AddMeal from './components/AddMeal';
import Search from './components/Search';

class App extends Component {
  state = {
    meals: meals,
    active: false
  };

  toggleMealForm = (event) => {
    this.setState({ active: !this.state.active });
  };

  createMeal = (meal) => {
    this.setState({ meals: [meal, ...this.state.meals] });
  };

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <Search />
        <ul>
          {this.state.meals.map((meal) => (
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
