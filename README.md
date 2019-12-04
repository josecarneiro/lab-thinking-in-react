![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Thinking in React

<!-- ![image](https://media.giphy.com/media/AnRrZMk7NNf4oF8IzS/giphy.gif) -->

By now, you have probably arrived at the conclusion that in React **everything is a component**. It's not uncommon for a complex React app to be composed of tens or even hundreds of nested components.

This whole philosophy is something that you should understand in order to get into the _React mindset_. In this exercise, we’ll apply these architectural patterns, and we'll walk through the _thinking process_ of building a searchable product data table using React.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Introduction

In the `src` folder, you will find the `data.json` file with an array of products of a random store.

Example of given data:

```json
// ...
{
  "category": "Sporting Goods",
  "price": "$49.99",
  "stocked": true,
  "name": "Football"
}
// ...
```

By taking a quick look at the available data, we can see that all of the products have the following fields: **category**, **price**, **stocked** and **name**, of which **stocked** holds a _boolean_ value (this information will be relevant soon). Also, bear in mind that you will not be working with the **category** field in any of the iterations of this Lab.

You're expected to divide the application logic into multiple components, pass data from parent to child components, and _lifting state up_ whenever needed.

🙏🏻 And please, don't forget, this is just an exercise, part of learning process, and no one expects you to do it perfectly in this short amount of time. Think through it, ask questions, be curious and explore all possibilities. Let's do this! :wink:

## Instructions

### Iteration 1 - Break The UI Into A Component Hierarchy

Remember: taking some time to plan out the app before you start building it will end up saving you time and helping you to avoid unnecessary hardships.

The first thing you should do is to sketch it out on piece of paper: draw boxes around every component (and sub-component) and give them all names.

A possible approach could be something like this:

<!-- ![image](https://user-images.githubusercontent.com/23629340/42808309-54d1594a-89b3-11e8-9df3-450127e4459e.png) -->

![whole_product_table](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e51857195e0f883bc5514619c231a02f.jpg)

As you can see here, we have four components in our app:

- **FilterableProductTable (orange):** contains the entirety of the example.
- **SearchBar (blue):** receives a user's search term.
- **ProductTable (green):** displays all of the products but also shows filtered products based on the user's search.
- **ProductRow (red):** displays a row (_table data_) for each product.

Now that we’ve identified the components in our app, let’s arrange them into a hierarchy. Components that appear within another component should appear as a child in the hierarchy:

- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductRow

### Iteration 2 - Build A Static Version using React

Let's first create a `components` directory in our `starter_code`, and then create our first component `<FilterableProductTable />`. This component will be a direct child of the `App` component, and will in turn have all of the other components as descendants.

Let's declare it and export it from `/components/FilterableProductTable`, and import it and use it in our `App.js` file. While you're at it, let's import the `data.json` file inside of `App.js` as well.

To kick off the project, we'll give you a starter hint: this component will pass in (and down) the products from the `data.json`. So you'll have something like this in your `App.js`:

```jsx
// App.js
import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data} />
      </div>
    );
  }
}

export default App;
```

Now it's your turn: create the `<SearchBar />`, `<ProductTable />` and `<ProductRow />` components, and make them statically display the search bar and all of the products (the `checkbox` in the search component should be considered a bonus).

Also, notice that any product that is out of stock is displayed in **red**. _Hint:_ In your **ProductRow** component you will most likely receive some props from its parent component. This will give you a chance to conditionally add a `className` or a `style` if the product is out of stock (false), in order to make it appear in red.

<!-- ![image](https://user-images.githubusercontent.com/23629340/42808421-95a78a66-89b3-11e8-85c1-3246127a7f1a.png) -->

### Iteration 3 - Make it dynamic - Filter the Products

Ok, we are ready to give some life to our app. Go ahead and add the filter functionality. Every time somebody types a letter, the list should update, based on the user's input.

_Hint:_ Setting the `search` property can be easily done through `form` and `onChange` handler, which will update the state on every keystroke.

![image](https://media.giphy.com/media/AnRrZMk7NNf4oF8IzS/giphy.gif)

### Iteration 4 - BONUS - The Checkbox Filter

As a part of the search component, we can add a checkbox to help us filter through the products that are in stock.

_Hint:_ Setting the `inStock` can also be done through `form` and `onChange` handler, which will update the state depending of the value of the _checked_ property.
We know that adding the checkbox to the search will probably be the biggest challenge, but don't be discouraged - you already know this, you just have to develop a way of thinking so you can apply the knowledge that you've acquired so far.

￼![products_in_stock](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_bda46746e1a2efec4f4b0c16117842ea.png)

### Styling your App

Feel free to style it how ever you want. :art:

Happy coding! 💙
