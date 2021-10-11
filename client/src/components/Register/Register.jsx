import { useState } from 'react'
// import './Register.css'

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
    <div className='glass'>
    <form onSubmit={(e)=> {
      e.preventDefault();
      props.handleRegister(formData);
    }}>
        <div className='page-title'>Register</div>

        <div className='register-info'>
      <label>
        Email:
        </label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        </div>
        
        <div className='register-username'>
      <label>
        Username:
        </label>
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
        </div>
        
        <br />
        <div className='register-password'>
      <label>
        Password:
        </label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        </div>
        
      <br />
      <button className='glass-button'>Submit</button>
    </form>
    </div>
  )
}

export default Register
