import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemEdit.css'

function ItemEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleItem = props.items.find(item=> item.id === Number(id) )
      setFormData({
        name: singleitem.name,
      });
    }
    if (props.items.length) {
      prefillFormData();
    }
  }, [props.items, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleItemUpdate(id, formData);
      }}
    >
      <h3>Edit Item</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}

export default ItemEdit