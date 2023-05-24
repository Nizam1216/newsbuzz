import React from 'react'
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
// import Home from './components/Home';
const Signin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({  
    email: "",
    password: "",
  });
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};
const handleSubmit = async (event) => {
  event.preventDefault();
  // Here you can do something with the formData
  try {
    const response = await axios.post('http://localhost:5000/auth/login', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: formData.email, password: formData.password})
    });

    if (response.status === 200) {
      console.log('User login successfully');
      alert("Logged in sucessfully")
      localStorage.setItem('token', response.data.authToken);
      console.log(localStorage)
      navigate("/Home")
    } else {
      console.log('Failed to login user');
      alert('Incorrect email or password.');
    }
  } catch (error) {
    console.error(error.response.data);
    alert('Invalid credentilas.');
  }
};

  return (
    <div>
         <Navbar />       
<main className="container form-signin my-3 w-100 m-auto shadow p-3 mb-5 bg-body-tertiary rounded">
 <form onSubmit={handleSubmit} className='container' >
  
  <code className="h3 mb-3 fw-normal container">Please Login here</code>
 
  <div className="form-floating  my-3">
      
    <input type="email" name='email' className="form-control" onChange={handleInputChange} id="floatingInput" placeholder="name@example.com"  />
    <label htmlFor="floatingInput">Email address</label>
  </div>

  <div className="form-floating  my-3">
    <input type="password" name='password' className="form-control" onChange={handleInputChange} id="floatingPassword" placeholder="Password"/>
    <label htmlFor="floatingPassword">Password</label>
  </div>

  <button className="w-100 btn btn-lg btn-primary" type='submit'>Login</button>
  <h3 className='container my-2'> Didnt have an account? <Link to="/">Sign Un</Link></h3>
</form>
</main>
    </div>
  )
}

export default Signin
