import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import Signin from './Signin';
import axios from 'axios';
import Navbar from './components/Navbar';
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    mobile: "",
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
    const response = await axios.post('http://localhost:5000/auth', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      console.log('User registered successfully');
      navigate("/Signin");
    } else {
      console.log('Failed to register user');
      // navigate("/Signin");
    }
  } catch (error) {
    console.error(error);
  }
  console.log(formData);
};
  return (
    <div>
      <Navbar />
      <main className="form-signin w-100 m-auto shadow p-3 mb-5 bg-body-tertiary rounded container my-3">
        <form onSubmit={handleSubmit}>

          <code className="h3 mb-3 fw-normal ">Please Register here</code>
          <div className="form-floating my-3">
            <input type="text" name='Name' className="form-control" id="floatingInput1" placeholder="your Name" value={formData.Name}
              onChange={handleInputChange} />
            <label htmlFor="floatingInput1">Name </label>
          </div>
          <div className="form-floating  my-3">

            <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" value={formData.email}
              onChange={handleInputChange} />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating  my-3">
            <input type="text" name='mobile' className="form-control" id="floatingInput3" placeholder="mobile number" value={formData.mobile}
              onChange={handleInputChange} />
            <label htmlFor="floatingInput3">mobile number</label>
          </div>
          <div className="form-floating  my-3">
            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" value={formData.password}
              onChange={handleInputChange} />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type='submit'>Regitser</button>

          <h3 className='container my-2'> Already A User? <Link to="/signin">Sign in</Link></h3>

        </form>
      </main>

    </div>
  )
}

export default Register
