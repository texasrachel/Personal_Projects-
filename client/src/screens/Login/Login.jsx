import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='login-input'>
    <form onSubmit={(e)=> {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <div className='login-label'>Login</div>
      <div className='login-username'>
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
      <div className='login-password'>
      <br />
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
      <Link to='/register'>Register</Link>
      </div>
  );
}
