import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { updateItem } from "../../services/items";
import "./ItemEdit.css";

function ItemEdit(props) {
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

  const { id } = useParams();

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
  } = item;

  const [isUpdated, setUpdate] = useState(false);

  useEffect(() => {
    const fillItem = () => {
      const oneItem = props.items.find((item) => item.id === Number(id));
      setItem({
        name: oneItem.name,
        img_url: oneItem.img_url,
        description: oneItem.description,
        category: oneItem.category,
        price: oneItem.price,
        url: oneItem.url,
        store_name: oneItem.store_name,
        store_address: oneItem.store_address,
        bought: oneItem.bought,
        currently_at: oneItem.currently_at,
        notes: oneItem.notes,
        user_id: oneItem.user_id,
        project_id: oneItem.project_id,
      });
    };
    if (props.items.length) {
      fillItem();
    }
  }, [props.items, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = await updateItem(id, item);
    console.log(item);
    setUpdate(update);
  };

  if (isUpdated) {
    return <Redirect to={`/items/${id}`} />;
  }

  return (
    <div className="item-form-container glass">
      <form onSubmit={handleSubmit}>
        <div className="page-title">Edit {item.name}</div>

        <div className="item-form-info">
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} />

          <label>Image Link:</label>
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

          <label>Item Web Link:</label>
          <input
            type="text"
            name="url" 
            value={url}
            onChange={handleChange} />

          <label>Notes:</label>
          <input
            type="text"
            name="notes"
            value={notes}
            onChange={handleChange}
          />

          <label>Store Name:</label>
          <input
            type="text"
            name="store_name"
            value={store_name}
            onChange={handleChange}
          />

          <label>Store Address:</label>
          <input
            type="text"
            name="store_address"
            value={store_address}
            onChange={handleChange}
          />

          <label>Bought:</label>
          <input
            type="text"
            name="bought"
            value={bought}
            onChange={handleChange}
          />

          <label>Current Place:</label>
          <input
            type="text"
            name="currently_at"
            value={currently_at}
            onChange={handleChange}
          />
        </div>
        <br />
        <button className="glass-button">Submit</button>
        <button
          className="glass-button"
          onClick={() => props.handleItemDelete(item.id)}
        >
          Delete
        </button>
      </form>
    </div>
  );
}

export default ItemEdit;
