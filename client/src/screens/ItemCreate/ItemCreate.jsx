import { useState } from 'react'

import './ItemCreate.css'
import Layout from '../../components/Layout/Layout'

function ItemCreate(props) {
  
  const [item, setItem] = useState({
    name: "",
    img_url: "",
    description: "",
    category: "",
    price: "",
    url: "",
    store_name: "",
    store_address: "",
    bought: "",
    currently_at: "",
    notes: "",
    // user_id: "",
    // project_id: ""
});

const {
  name,
  img_url,
  description,
  category,
  price,
  url,
  store_name,
  store_address,
  bought,
  currently_at,
  notes,
  // user_id,
  // project_id,
} = item
  
  const { createItem } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setItem((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
  <Layout>
    <div className='temp-box'>
      <form onSubmit={(e)=> {
      e.preventDefault()
      createItem(item);
    }}>
          <h3>Create Item</h3>
          <p className="item-form-name">
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
          </p>
          <p className="item-form-image">
            <label>
              Image Url:
              <input
                type="text"
                name="img_url"
                value={img_url}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="item-form-description">
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="item-form-category">
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="item-form-price">
            <label>
              Price:
              <input
                type="text"
                name="price"
                value={price}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="item-form-url">
            <label>
              For:
              <input
                type="text"
                name="url"
                value={url}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="item-form-store-name">
            <label>
              Store Name:
              <input
                type="text"
                name="store_name"
                value={store_name}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="item-form-store-address">
            <label>
              Store Address:
              <input
                type="text"
                name="store_address"
                value={store_address}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="item-form-bought">
            <label>
              bought:
              <input
                type="text"
                name="bought"
                value={bought}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="item-form-currently-at">
            <label>
              Currently At:
              <input
                type="text"
                name="currently_at"
                value={currently_at}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="item-form-notes">
            <label>
              Notes:
              <input
                type="text"
                name="notes"
                value={notes}
                onChange={handleChange}
              />
            </label>
          </p>

      <br/>
      <button>Submit</button>
    </form>
      </div>
      </Layout>
  )
}

export default ItemCreate
