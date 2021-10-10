import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  getItem,
  deleteItem
} from "../../services/items";
import "./ItemDetail.css";
import Layout from "../../components/Layout/Layout";

function ItemDetail(props) {
  const [item, setItem] = useState(null);
  // const [selectedItem, setSelectedItem] = useState("");
  const { id } = useParams();
  // const { projects } = props;
  const history = useHistory()

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
    <div className="temp-box">
      <Layout>
        <h2>Item Detail</h2>
        <div>
          {item && (
            <div>
              <h3>{item.name}</h3>
              <img src={item.img_url} alt={item.name} />
              <p>{item.description}</p>
              <Link to={`/items/${item.id}/edit`}>
                <button>Update</button>
              </Link>
              <button
                onClick={() => {
                  deleteItem(item.id)
                  history.push('/items')
                }}
              >
            Delete
          </button>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default ItemDetail;
