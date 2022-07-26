import React from 'react'

const Item = ({ id, name, amount, deleteItem }) => {
  return (
    <article className='item' id={id}>
      <h3>{name}</h3>
      <h4>{amount}</h4>
      <button className={'delete-item'} onClick={(event) => deleteItem(id)}>x</button>
    </article>
  )
}

export default Item
