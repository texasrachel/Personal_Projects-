import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Layout from '../../components/Layout/Layout'
import { updateItem } from '../../services/items';
// import './ItemEdit.css'

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
  } = item

  console.log(props.items)
  
  const [isUpdated, setUpdate] = useState(false)

  useEffect(() => {
    const fillItem = () => {
      const oneItem = props.items.find((item) =>
        item.id === Number(id)
      )
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
        project_id: oneItem.project_id
      });
    }
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
    console.log(item)
    setUpdate(update);
  };

  if (isUpdated) {
    return <Redirect to={`/items/${id}`} />;
  }

  return (
    <Layout>
      <div className="item-form-container">
        <form onSubmit={handleSubmit}>
          <h3>Edit Item</h3>
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
              Item Web Url:
              <input
                type="text"
                name="url"
                value={url}
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
            <p className="item-form-store_name">
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
          <p className="item-form-store_address">
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
              Bought:
              <input
                type="text"
                name="bought"
                value={bought}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="item-form-currently_at">
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
      <br />
      <button>Submit</button>
        </form>
      </div>
        </Layout>
  );
}

export default ItemEdit