import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
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
    <form onSubmit={(e)=> {
      e.preventDefault();
      props.handleSignIn(formData);
    }}>
      <h3>SignIn</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
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
      <br />
      <Link to='/signup'>SignUp</Link>
      <button>Submit</button>
    </form>
  );
}

export default SignIn