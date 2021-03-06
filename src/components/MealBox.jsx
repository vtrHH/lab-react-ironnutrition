import React from 'react';

class MealBox extends React.Component {
  state = {
    amount: 1
  };

  incrementAmount = (event) => {
    this.setState({ amount: this.state.amount + 1 });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
  };

  render() {
    const meal = this.props.meal;
    return (
      <li>
        <div className="media">
          <img
            src={meal.image}
            className="img-thumbnail mr-3 mw-25 border-0"
            style={{ maxWidth: '10em' }}
            alt={meal.name}
          />
          <div className="media-body align-self-center">
            <h5 className="mt-0 mb-1">{meal.name}</h5>
            <small>{meal.calories}</small>
          </div>
          <form
            className="row align-self-center"
            onSubmit={this.handleFormSubmission}
          >
            <input
              className="form-control col-9"
              type="number"
              value={this.state.amount}
              onChange={this.incrementAmount}
            />
            <button className="btn btn-primary col-3">+</button>
          </form>
        </div>
      </li>
    );
  }
}

export default MealBox;
