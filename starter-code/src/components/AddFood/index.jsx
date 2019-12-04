import React, { Component } from 'react';

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: 0,
      image: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    };
    this.props.onSubmit(data);
  }

  handleInputChange(event) {
    // const value = event.target.value;
    const name = event.target.name;
    // First, easiest way
    /*
    if (name === 'name') {
      this.setState({
        name: value
      });
    } else if (name === 'calories') {
      this.setState({
        calories: value
      });
    } else if (name === 'image') {
      this.setState({
        image: value
      });
    }
    */
    // Second way
    /*
    switch (name) {
      case 'name':
        this.setState({
          name: value
        });
        break;
      case 'calories':
        this.setState({
          calories: value
        });
        break;
      case 'image':
        this.setState({
          image: value
        });
        break;
    }
    */
    let value;
    if (event.target.type === 'number') {
      value = event.target.valueAsNumber;
    } else {
      value = event.target.value;
    }
    // Third
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="food-name">Name</label>
          <input
            id="food-name"
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="food-calories">Calories</label>
          <input
            id="food-calories"
            type="number"
            className="form-control"
            placeholder="Calories"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="food-image">Image</label>
          <input
            id="food-image"
            type="text"
            className="form-control"
            placeholder="Image URL"
            name="image"
            value={this.state.image}
            onChange={this.handleInputChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default AddFood;
