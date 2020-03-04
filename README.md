![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# React | IronNutrition

## Introduction

After a few weeks of intensive work in the Web Development Bootcamp, you've realized that your diet hasn't been very balanced. This could have a negative impact on your health and productivity.

To ensure that you keep a balanced diet, we have decided to build a nutrition app to track everything you eat.

![](https://media.giphy.com/media/fH0dyqpPJRvTbiF5rJ/giphy.gif)

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "Completed lab"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### React-Bootstrap Installation

You've worked with Bootstrap in the past. Now we'll use it alongside React!

To use Bootstrap and React-Bootstrap in your app, you first need to install both packages from the command line:

```bash
$ npm install bootstrap react-bootstrap
```

Then, import the minified version of the Bootstrap stylesheet into your `index.js` file.

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

You are now ready to start working with React-Bootstrap components! Follow the package's [documentation](https://react-bootstrap.github.io/getting-started/introduction/).

### Import the data

At the top of your `App.jsx` file, import the array of meals from the `meals.json` file:

```js
import meals from './meals.json';
```

### Iteration 1 | Create the `MealBox` component

Let's create a `MealBox` component. It should take `meal` as a prop (one of the objects representing a single meal) and display a box with all of the information about that specific item. You can test this for now by rendering the component with the first meal on the array of `meals`.

Use the following HTML snippet to structure your `MealBox` component. Please note, the following is pure `html`, not a valid `jsx` template, so you'll need to make the conversion:

```html
<div class="media">
  <img
    src="https://i.imgur.com/eTmWoAN.png"
    class="img-thumbnail mr-3 mw-25 border-0"
    style="max-width: 10em;"
  />
  <div class="media-body align-self-center">
    <h5 class="mt-0 mb-1">Pizza</h5>
    <small>400 cal</small>
  </div>
  <form class="row align-self-center">
    <input class="form-control col-9" type="number" value="1" />
    <button class="btn btn-primary col-3">+</button>
  </form>
</div>
```

![](https://i.imgur.com/bY9i5Rw.png)

### Iteration 2 | Display meal

In your `App` component (your main component), display one `MealBox` component for each meal inside of the `meals` array.

![](https://i.imgur.com/3TVQJDO.png)

### Iteration 3 | Add new meal

Create a button to add new meals.

When a user clicks the button, a form should appear with fields for a _name_, _number of calories_, and an _image_.

When the user clicks submit, the meal will be added to the list.

The form should disappear when the user clicks the submit button.

### Iteration 4 | Implement search bar

Create a `Search` component to perform a search that updates the list of all meals.

![](https://i.imgur.com/XaOpAx8.png)

### Iteration 5 | Create add buttons

On your `MealBox`, you have an input and a "+" button. Use them so that, when the user clicks on the button, it adds the item to a list displayed on the right side of your app, titled "_Today's meals_".

You will also need to display the total amount of calories at the bottom of the list.

![](https://media.giphy.com/media/fH0dyqpPJRvTbiF5rJ/giphy.gif)

### Bonus: Iteration 5 | Group meals

You've built an awesome application, but there's a little problem in the User Experience. For example, if you click twice on "Pizza", it will display 2 lines "_1 Pizza = 400 cal_" instead of 1 line "_2 Pizza = 800 cal_". Fix that problem.

### Bonus: Iteration 6 | Allow the user to remove a meal

On each item on the "_Today's meals_" list, add a button with a trash can icon that allows the user to remove each of the items.

To start, you might want to write "Remove" inside of the button, and later choose what approach to take to insert the icon. We would recommend checking either [Google Material Icons](https://material.io/resources/icons) or [FontAwesome](https://fontawesome.com/). You might also get a good result by just inserting an emoji 🗑.

Happy coding! 💙
