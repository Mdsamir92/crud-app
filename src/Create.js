import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Create.css"

function Create() {

  const navigate = useNavigate("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      'https://632c652f5568d3cad884c4bc.mockapi.io/Crud-Youtube',
      {
        name: name,
        email: email,
        phone: phone,
      }
    ).then(() => {
      navigate("/read");
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

       <div className='form-container'>
        <form >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" required onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label"  >Email address</label>
            <input type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3" >
            <label className="form-label">Phone number</label>
            <input type="number" className="form-control" required onChange={(e) => setPhone(e.target.value)} />
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
