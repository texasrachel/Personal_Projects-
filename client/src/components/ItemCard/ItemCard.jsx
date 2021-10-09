import "./ItemCard.css";

function ItemCard(props) {
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
    user_id,
    project_id,
  } = props;

  return (
    <div className="item-card">
      <p>Item Card</p>
      <h2>{name}</h2>
      <img src={img_url} alt={name} />
      <p>{description}</p>
      <div className="item-card-body">
        <p>{category}</p>
        <p>{price}</p>
        <p>{url}</p>
        <p>{price}</p>
        <p>{store_name}</p>
        <p>{store_address}</p>
        <p>{bought}</p>
        <p>{currently_at}</p>
        <p>{notes}</p>
        <p>{user_id}</p>
        <p>{project_id}</p>
      </div>
    </div>
  );
}

export default ItemCard;
