import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { getItem, deleteItem } from "../../services/items";
import "./ItemDetail.css";

function ItemDetail(props) {
  const [item, setItem] = useState(null);
  // const [selectedItem, setSelectedItem] = useState("");
  const { id } = useParams();
  const { projects } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchItem = async () => {
      const itemData = await getItem(id);
      setItem(itemData);
    };
    fetchItem();
  }, [id]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedItem(value);
  // };

  return (
    <div className="item-detail">
      <div>
        {item && (
          <div className="item-list">
            <div className="page-title">{
              item.name}</div>

            <div className="item-info">
              <div className="item-image glass">
                <img src={item.img_url} alt={item.name} />
              </div>

              <div className="item-text glass">
                <div>
                  <div className="item-text-title">Description: </div>
                  <div className="item-text-info">{item.description}</div>
                  <div className="item-text-title">Category: </div>
                  <div className="item-text-info">{item.category}</div>
                  <div className="item-text-title"> Price: </div>
                  <div className="item-text-info">{item.price}</div>
                  <div className="item-text-title">Item Web Link: </div>
                  <div className="item-text-info">{item.url}</div>
                  <div className="item-text-title">Store Name: </div>
                  <div className="item-text-info">{item.store_name}</div>
                  <div className="item-text-title">Store Address: </div>
                  <div className="item-text-info">{item.store_address}</div>
                  <div className="item-text-title">Bought: </div>
                  <div className="item-text-info">{item.bought}</div>
                  <div className="item-text-title">Current Place: </div>
                  <div className="item-text-info">{item.currently_at}</div>
                  <div className="item-text-title">Notes: </div>
                  <div className="item-text-info">{item.notes}</div>
                </div>

                <div className="buttons">
                  <Link to={`/items/${item.id}/edit`}>
                    <button className="glass-button button-space">Edit Item</button>
                  </Link>
                  <button
                    className="glass-button button-space"
                    onClick={() => {
                      deleteItem(item.id);
                      history.push("/items");
                    }}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
