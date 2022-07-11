import React from 'react'

const Item = ({ name, amount }) => {
  return (
    <article>
      <h3>{name}</h3>
      <h4>{amount}</h4>
    </article>
  )
}

export default Item
