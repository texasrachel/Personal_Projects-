import { useState } from 'react'

function ItemCreate(props) {
  const { name, value } = e.target
  setFormData((prevState) => ({
    ..prevState,
    [name]: value
  }))
}

  return (
    <div>
      <form onSubmit={(e)=> {
      e.preventDefault()
      props.handleItemCreate(formData);
    }}>
      <h3>Create Item</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button>Submit</button>
    </form>
    </div>
  )
}

export default ItemCreate
