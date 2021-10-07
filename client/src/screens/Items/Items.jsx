import React from 'react'

function Items(props) {
  return (
    <div>
      <h1>Items</h1>
      {props.items.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  )
}

export default Items
