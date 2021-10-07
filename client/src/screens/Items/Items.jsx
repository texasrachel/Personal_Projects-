import { Link } from 'react-router-dom'

function Items(props) {
  return (
    <div>
      <h1>-Items-</h1>
      <Link to={`/items/${props._id}`>
      {props.items.map(item => (
        <p key={item.id}>{item.name}</p>
      ))
      }
      </Link>
    </div>
  )
}

export default Items
