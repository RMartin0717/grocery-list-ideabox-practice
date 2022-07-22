import React from 'react'

const Item = ({ name, amount }) => {
  return (
    <article className='item'>
      <h3>{name}</h3>
      <h4>{amount}</h4>
    </article>
  )
}

export default Item
