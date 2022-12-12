import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import'./style.css'

function AdminProfile() {
  const [inputs, setInfo]=useState({
    name:"",
    email:"",
    mobile:"",
    location:''
}) 

const id = sessionStorage.getItem("id");

useEffect(() => {
    getUser();
}, []);

function getUser() {
    axios.get(`http://localhost/ApiRedux/user.php/${id}`)
    .then(function(response) {
        setInfo(response.data);
    });
}
console.log(id)

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo(values => ({...values, [name]: value,id:sessionStorage.getItem('id')}));
}
const handleSubmit = (e) => {
    
    e.preventDefault();
    axios.put(`http://localhost/ApiRedux/user.php`,inputs).then(function(response){
        // navigate('/Userprofile');

    });
    window.location.reload(false);

}

  return (
    <>
      	<header className="header-section dashboard-nav">
  <div className="header-warp">
 
    <div className="header-bar-warp d-flex">
      {/* site logo */}
      <a href="/" className="site-logo">
        <img src="./img/logo.png" alt="" />
      </a>
      <nav className="top-nav-area w-100">
        <div className="user-panel">
          
     
        
        <Link className="navbar-brand" to='/adminProfile'>Admin Profile</Link>
        

        </div>
        {/* Menu */}
        <ul className="main-menu primary-menu">
        <li><a href="/users">users</a></li>
      {/* <NavLink to={"/users"}>Users</NavLink> */}

      <li><a href="/Posts">posts</a></li>

      <li><a href="/pendingPosts">Pending Posts</a>
      </li>
      <li><a href="/Comments">comments</a></li>

        </ul>
      </nav>
    </div>
  </div>
</header>

<div className='userstable'>
<div className="container  mt-5 ">
<h2 className='mb-4'>Your Profile</h2>
  <div className="main-body">
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">

            <form onSubmit={handleSubmit} className="container">

{/* id */}
            <div className="row mb-3">
                <div className="col-sm-3">
                    {/* {inputs.id} */}
                  <h6 className="mb-0">User Id</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input disabled className="form-control" placeholder={inputs.id}  style={{color:'black',backgroundColor:'black'}}/>
                </div>
              </div>


{/* Name */}
              <div className="row mb-3">
                <div className="col-sm-3">
                    {/* {inputs.name} */}
                  <h6 className="mb-0">Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="name" type="text" className="form-control"  placeholder={inputs.name}   onChange={handleChange}/>
                </div>
              </div>

            

{/* Email */}             
              <div className="row mb-3">
                <div className="col-sm-3">
                    {/* {inputs.email} */}
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="email" type="email" className="form-control" placeholder={inputs.email}  onChange={handleChange}/>
                </div>
              </div>

{/* Phone */}              
              <div className="row mb-3">
                <div className="col-sm-3">
                    {/* {inputs.mobile} */}
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="mobile" type="text" className="form-control" placeholder={inputs.mobile}  onChange={handleChange}/>
                </div>
              </div>

{/* location */}              
<div className="row mb-3">
                <div className="col-sm-3">
                    {/* {inputs.location} */}
                  <h6 className="mb-0"> location</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input required name="location" type="text" className="form-control" placeholder={inputs.location}     onChange={handleChange}/>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-3" />
                <div className="col-sm-9 text-secondary">
                  <button type="submit" className="btn btn-light px-4" >Save Changes</button>
                </div>
              </div>


            </form>


          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center"> <br /> <br />
              <img src={inputs.img} alt="Admin" className="rounded-circle p-1 bg-primary" width={110} />
              <div className="mt-3">
                <br />
                
                <br />
              </div>
            </div>
            <hr className="my-2" />
            <br/>
            <div className="row">
              <div className="col-lg-6">
                <label>Registration Date : </label>
              </div>
              <div className="col-lg-6">
                <p className="text-secondary mb-1">{inputs.created_at}</p>
              </div>
              <br/><br/><br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>



    </>
  )
}

export default AdminProfile