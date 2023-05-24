import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-primary"style={{marginBottom:"70px"}} data-bs-theme="primary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/unvisited" style={{color:'#fff'}}>first face</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/unvisited" style={{color:'#fff'}}>Unvisited</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/home"style={{color:'#fff'}}>Visited</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/report"style={{color:'#fff'}}>Report an issue</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About"style={{color:'#fff'}}>About us</Link>
          </li>
        </ul>
        <form className="d-flex bg-primary" >
     
            <Link className='mx-2' to="/addpost"><button className="btn btn-dark">Add post </button></Link>
            <Link className='mx-2' to="/"><button className="btn btn-dark">Sign up </button></Link>
          
            <Link  to="/signin"><button className=" btn btn-dark">Sign in </button></Link>
         
         
        </form>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar
