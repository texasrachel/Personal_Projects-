import './ItemCard.css'

function ItemCard(props) {
  const { name, img_url, description, category, price, url, store_name, store_address, bought, currently_at, notes,, user_id, project_id } = props;

  return (
    <div className="card">
      <p>ItemCard</p>
      <h2>{name}</h2>
      <img src={img_url} alt={name} />
      <div className="card-body">
        <p>{description}</p>
        <p>{ category }</p>
        <p>{ instructions_link }</p>
        <p>{ made_for }</p>
        <p>{ notes }</p>
        <p>{ user_id }</p>
        <p>{ item_id }</p>
      </div>
  </div>
  );
}

export default ItemCard;
