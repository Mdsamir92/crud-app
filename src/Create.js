import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2"

function Create() {

  const navigate = useNavigate("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

// const Swal = require('sweetalert2')
  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.length ==""){
    
      // Swal.fire({
      //   icon:"error",
      //   title:"Oops..",
      //   text:"please enter name!.."
      // });
      Swal.fire({title:"Oops",text:"please enter name..."})
     return;
    }  if(email.length ==""){
   Swal.fire("please enter email...")
     return;
    } if(phone.length ==""){
      Swal.fire("please enter number...")
     return;
    }
    else{
      alert("submit successfully")
      navigate("/read");
    }
    axios.post(
      'https://632c652f5568d3cad884c4bc.mockapi.io/Crud-Youtube',
      {
        name: name,
        email: email,
        phone: phone,
      }
    ).then(() => {

    });


  }

  return (
    <div>

      <div className='d-flex justify-content-between m-3'>
        <h2>Create Operation</h2>
        <Link to="/read">
          <button className='btn btn-warning'>Show Data</button>
        </Link>
      </div>

      {/* <div className='form-container' style={{ margin: "80px", padding: "40px", width: "60%", marginTop: "80px", marginLeft: "20px", boxShadow: "-10px  10px  10px  5px grey", display: "grid", placeItems: "center" }}> */}
       <div className='form-container'>
        <form >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="name" className="form-control" placeholder='Enter name...' onChange={(e) => setName(e.target.value)}  required/> 
          </div>
          <div className="mb-3">
            <label className="form-label"  >Email address</label>
            <input type="email" className="form-control" placeholder='Enter email...' onChange={(e) => setEmail(e.target.value)} required  />
          </div>
          <div className="mb-3" >
            <label className="form-label">Phone </label>
            <input type="number" className="form-control" placeholder='Enter number...' onChange={(e) => setPhone(e.target.value)} required  />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-warning" onClick={handleSubmit}>Submit</button>
        </form>
       
      </div>
    </div>
  )
}

export default Create;
