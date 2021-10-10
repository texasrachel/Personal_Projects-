import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getItem } from "../../services/items";
import "./ItemDetail.css";
import LayoutComponent from "../../components/LayoutComponent/LayoutComponent";

function ItemDetail(props) {
  const [item, setItem] = useState(null);
  // const [selectedItem, setSelectedItem] = useState("");
  const { id } = useParams();
  // const { projects } = props;

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
      <LayoutComponent>
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
            </div>
          )}
        </div>
      </LayoutComponent>
    </div>
  );
}

export default ItemDetail;
