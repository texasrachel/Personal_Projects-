import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneItem } from "../services/Items";

function ItemDetail(props) {
  const [ItemDetail, setItemDetail] = useState(null);
  const [selectedItem, setSelectedItem] = useState("");
  const { id } = useParams();
  // const { projects } = props;

  useEffect(() => {
    const getItemDetail = async () => {
      const ItemData = await getOneItem(id);
      setItemDetail(ItemData);
    };
    getItemDetail();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedItem(value);
  };

  return (
    <div>
      <h3>{itemDetail?.name}</h3>
      {itemDetail?.items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default ItemDetail;
