import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='login-input'>
      Login screen
      <form onSubmit={(e)=> {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
        <div className='login-title'>Login</div >
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
      <br />
        <div className='login-password'>
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
      <Link to='/register'>Register</Link>
      <button>Submit</button>
    </form>
    </div>
  )
}

export default Login
