import { useState } from 'react'

function Register(props) {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='register-input'>
    <form onSubmit={(e)=> {
      e.preventDefault();
      props.handleRegister(formData);
    }}>
        <div className='register-title'>Register</div>

        <div className='register-email'>
      <label>
        Password:
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      </div>
        <div className='register-username'>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      </div>
        <br />
        <div className='register-password'>
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      </div>
      <br />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default Register
