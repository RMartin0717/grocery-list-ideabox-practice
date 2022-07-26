import React, { Component } from 'react'
import AddItem from '../AddItem/AddItem'
import Error from '../Error/Error'
import YourList from '../YourList/YourList'
import { getItems } from '../../utilities/ApiCalls'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groceryListItems: [],
      error: ''
    }
  }

  componentDidMount() {
    getItems()
      .then(data => this.setState({ groceryListItems: data }))
      .catch(error => this.setState({ error: 'Unable to retrieve list' }))
  }

  deleteItem(id) {
    console.log('delete')
  }

  render() {
    return (
      <main>
        <h1 className='grocery-list-heading'>Grocery List</h1>
        <AddItem />
        <YourList
          groceryListItems={this.state.groceryListItems}
          deleteItem={this.deleteItem}
        />
        {this.state.error &&
          <Error error={this.state.error} />
        }
      </main>
    )
  }

}

export default App
