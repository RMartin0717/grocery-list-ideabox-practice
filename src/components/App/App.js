import React, { Component } from 'react'
import AddItem from '../AddItem/AddItem'
import YourList from '../YourList/YourList'
import { getItems } from '../../utilities/ApiCalls'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groceryListItems: []
    }
  }

  componentDidMount() {
    getItems()
      .then(data => this.setState({ groceryListItems: data }))
  }

  render() {
    return (
      <main>
        <h1>Grocery List</h1>
        <AddItem />
        <YourList
          groceryListItems={this.state.groceryListItems}
        />
      </main>
    )
  }

}

export default App
