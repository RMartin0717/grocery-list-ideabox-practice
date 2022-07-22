
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
    <div>
      <h2 className='your-list-heading'>Your List</h2>
      <section className='item-list'>
        {itemList}
      </section>
    </div>
  )
}

export default YourList
