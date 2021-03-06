import React from 'react';

class AddMeal extends React.Component {
  state = {
    name: '',
    numberOfCalories: 0,
    image: ''
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { name, numberOfCalories, image } = this.state;
    if (name && numberOfCalories && image) {
      const meal = {
        name: name,
        calories: numberOfCalories,
        image: image,
        quantity: 0
      };
      this.setState({ name: '', numberOfCalories: '', image: '' });
      this.props.onMealCreate(meal);
      // this.props.toggleMealForm();
    }
  };

  handleNewMealChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form className="adding-form" onSubmit={this.handleFormSubmission}>
          <label htmlFor="input-name">Name</label>
          <input
            id="input-name"
            name="name"
            type="text"
            placeholder="Name of the meal to add"
            value={this.state.name}
            onChange={this.handleNewMealChange}
          />

          <label htmlFor="input-numberOfCalories">Number of Calories</label>
          <input
            id="input-numberOfCalories"
            name="numberOfCalories"
            type="number"
            placeholder="Number of calories"
            value={this.state.numberOfCalories}
            onChange={this.handleNewMealChange}
          />

          <label htmlFor="input-image">Image</label>
          <input
            id="input-image"
            name="image"
            type="url"
            placeholder="URL of the meal image"
            value={this.state.image}
            onChange={this.handleNewMealChange}
          />

          <button onClick={this.handleFormSubmission}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddMeal;
