import React from 'react'
import Navbar from '../Navbar'

const Addpost = () => {
  return (
    <div>
        <Navbar />
       <main className="container form-signin my-3 w-100 m-auto shadow p-3 mb-5 bg-body-tertiary rounded">
                 <form  className='container' >
                  
                  <code className="h3 mb-3 fw-normal container">Add your post</code>
                 
                  <div className="form-floating  my-3">
                      
                    <input type="text" name='title' className="form-control" id="floatingInput" placeholder="name@example.com"  />
                    <label htmlFor="floatingInput">Name(linkedin name)</label>
                  </div>
                
                  <div className="form-floating  my-3">
                    <input type="text" name='description' className="form-control"  id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Post URL</label>
                  </div>
                  <div className="form-floating  my-3">
                    <input type="text" name='description' className="form-control"  id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">category of post</label>
                  </div>
                  <button className="w-100 btn btn-lg btn-primary" type='submit'>Add post</button>
                
                </form>
                </main>
    </div>
  )
}

export default Addpost
