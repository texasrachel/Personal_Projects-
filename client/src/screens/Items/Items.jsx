// import { Link } from 'react-router-dom'
import './Items.css'

function Items(props) {
  return (
    <div className='tempbox'>
      <h1>-Items-</h1>
      {/* <Link to={`/items/${props._id}`> */}
      {props.items.map(item => (
        <p key={item.id}>{item.name}</p>
      ))
      }
      {/* </Link> */}
    </div>
  )
}

export default Items
