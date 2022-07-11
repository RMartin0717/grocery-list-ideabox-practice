import React, { Component } from 'react'
import { postItem } from '../../utilities/ApiCalls'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      amount: '',
      error: null
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  submitItem = (event) => {
    event.preventDefault()
    if (this.state.name && this.state.amount) {
      const newItem = {
        id: Date.now(),
        name: this.state.name,
        amount: this.state.amount
      }
      postItem(newItem)
      this.clearInputs()
    } else {
      return
    }
  }

  clearInputs = () => {
    this.setState({
      name: '',
      amount: ''
    })
  }
  render() {
    return(
      <form className='add-item-form'>
       <h2>Add Item</h2>
       <input
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
       />
       <input
          type='text'
          placeholder='amount'
          name='amount'
          value={this.state.amount}
          onChange={(event) => this.handleChange(event)}
       />
       <button onClick={(event) => this.submitItem(event)}>Add Item to Grocery List</button>
      </form>
    )
  }
}

export default AddItem
