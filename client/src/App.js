import './App.css';
import {useEffect, useState} from 'react'


function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  
  const [test, setTest] = useState('starting')

  useEffect(() => {
    setTest
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }


  return (
    <div className="App">
      <h1>Project Shopping Planner</h1>
      <form>
        <input name='username' onChange = {handleChange} />
        <input name='password' onChange = {handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
