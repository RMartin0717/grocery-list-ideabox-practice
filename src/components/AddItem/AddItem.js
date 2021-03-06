import React, { Component } from 'react'
import Error from '../Error/Error'
import { postItem } from '../../utilities/ApiCalls'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      amount: '',
      error: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleClick = (event) => {
    this.submitItem(event)
  }

  submitItem = (event) => {
    if (this.state.name && this.state.amount) {
      const newItem = {
        id: Date.now(),
        name: this.state.name,
        amount: this.state.amount
      }
      postItem(newItem)
      this.clearInputs()
    } else {
      event.preventDefault()
      this.setState({ error: 'Please input both a name and an amount'})
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
       <h2 className='add-item'>Add Item</h2>
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
       <button onClick={(event) => this.handleClick(event)} className='submit-item'>Add Item to Grocery List</button>
       {this.state.error &&
         <Error error={this.state.error} />
       }
      </form>
    )
  }
}

export default AddItem
