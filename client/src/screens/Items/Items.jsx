import React from 'react'
import { Link } from 'react-router-dom'
import './Items.css'
import ItemCard from '../../components/ItemCard/ItemCard'

function Items(props) {
  const { items } = props
  console.log(items)

  return (
    <div className='item-page"'>
    <div className='page-title'> Items </div>
      <div className="item-map">
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
      <div className='item-new'>
      <div className='items-text'>
        <Link to="/projects/new">
            New Project</Link>
        </div>
        <div className='items-text'>
      <Link to="/items/new">New Item</Link>
        </div>
        </div>
    </div>
  )
}

export default Items
