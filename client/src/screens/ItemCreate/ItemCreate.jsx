import { useState } from "react";
import { useHistory } from 'react-router-dom'

import "./ItemCreate.css";

function ItemCreate(props) {
  const history = useHistory();

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
  } = item;

  const { createItem } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // history.push("/items");
  };
  return (
    <div className="item-create-container ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createItem(item);
          history.push("/items");
        }}
      >
        <div className="page-title">Create New Item</div>

        <div className="item-text glass">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange} />

          <label>Image Url:</label>
          <input
            type="text"
            name="img_url"
            value={img_url}
            onChange={handleChange}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />

          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={handleChange}
          />

          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
          />

          <label>URL:</label>
          <input type="text" name="url" value={url} onChange={handleChange} />

          <label>Store Name:</label>
          <input
            type="text"
            name="store_name"
            value={store_name}
            onChange={handleChange}
          />

          <label>Store Address: </label>
          <input
            type="text"
            name="store_address"
            value={store_address}
            onChange={handleChange}
          />

          <label>Bought: </label>
          <input
            type="text"
            name="bought"
            value={bought}
            onChange={handleChange}
          />

          <label>Currently At: </label>
          <input
            type="text"
            name="currently_at"
            value={currently_at}
            onChange={handleChange}
          />

          <label>Notes: </label>
          <input
            type="text"
            name="notes"
            value={notes}
            onChange={handleChange}
          />
        </div>

        <br />
        <button className='glass-button'>Submit</button>
      </form>
    </div>
  );
}

export default ItemCreate;
