
import React from 'react'
import Item from '../Item/Item'

const YourList = ({ groceryListItems }) => {
  const itemList = groceryListItems.map(item => {
    return <Item
      name={item.name}
      amount={item.amount}
      key={item.id}
    />
  })

  return(
    <section>
      <h2>Your List</h2>
      {itemList}
    </section>
  )
}

export default YourList
