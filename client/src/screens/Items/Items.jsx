import React from 'react'
import { Link } from 'react-router-dom'
// import './Items.css'
import ItemCard from '../../components/ItemCard/ItemCard'

function Items(props) {
  const { items } = props
  console.log(items)

  return (
    <div className='temp-box'>
      <h1> -Items- </h1>
      <div className="item-card">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <Link to={`/items/${item.id}`}>
              <ItemCard
                name={item.name}
                img_url={item.img_url}
                description={item.description}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <p>
        <Link to="/projects/new">New Project</Link>
      </p>
      <Link to="/items/new">New Item</Link>
    </div>
  )
}

export default Items
