import React, { Component } from 'react'
import AddItem from '../AddItem/AddItem'
import YourList from '../YourList/YourList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryListItems: []
    }
  }

  render() {
    return (
      <>
        <h1>Grocery List</h1>
        <AddItem />
        <YourList
          groceryListItems={this.state.groceryListItems}
        />
      </>
    )
  }
}

export default App
