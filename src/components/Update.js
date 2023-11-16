import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

function Update() {

    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");

    const navigate= useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPhone(localStorage.getItem("phone"));
    },[]);

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(
            `https://632c652f5568d3cad884c4bc.mockapi.io/Crud-Youtube/${id}`,
        {
            name:name,
            email:email,
            phone:phone,
        }  
        ).then(()=>{
            navigate("/read");
        })  
    };
    
  return (
    <div>
    <h2>Update</h2>
<div className='form-container'> 
<form>
<div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Phone number</label>
    <input type="number" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input"/>
    <label className="form-check-label">Check me out</label>
  </div>
  <button type="submit" className="btn btn-warning mx-2"  onClick={handleUpdate}>Update</button>
  <Link to="/read">
  <button className='btn btn-warning mx-2 my-2' >Back</button>
  </Link>
</form>
</div>
    </div>
  )
}

export default Update;
