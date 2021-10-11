import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="glass">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin(formData);
        }}
      >
        <div className="page-title">Login</div>
        <div className='login-info'>
        <div className="login-username">
          <label>
            Username:
            </label>
            <br />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
        </div>
        <br />
        <div className="login-password">
          <label>
            Password:
            </label>
            <br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
        </div>
        </div>
        <br />
        <button className="glass-button">Submit</button>
      </form>
      <br />
      <div className='text-link'>
        <Link to="/register" className='title'>Register</Link>
        </div>
    </div>
  );
}

export default Login;
