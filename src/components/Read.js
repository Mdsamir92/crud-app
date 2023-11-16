import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function Read() {

  const [data,setData]=useState([]); // for display and read our data
  const [input,setInput]=useState(""); //for search name
  const [tabledark,setTabledark]=useState(''); //for dark mode

  const getData=()=>{
   axios.get("https://632c652f5568d3cad884c4bc.mockapi.io/Crud-Youtube")
   .then((res)=>{
    setData(res.data)
   });
  }
  
  function handleDelete(id){
    axios.delete(`https://632c652f5568d3cad884c4bc.mockapi.io/Crud-Youtube/${id}`)
    .then(()=>{
      getData();
    });
  }
  const setToLocalStorage=(id,name,email,phone)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("phone",phone)

  }
  useEffect(()=>{
    getData();
  },[]);

 const inputHandler = (e)=>{
  setInput(e.target.value.toLowerCase());
 }


  return (
    <div>
    {/* Darkmode */}
    <div className='for-check form-switch m-3'>
    <input className='form-check-input' type="checkbox" 
      onClick={()=>{
        if(tabledark=== 'table-dark') setTabledark("")
        else setTabledark("table-dark")

      }}
    />

    </div>

      <div className='d-flex justify-content-between  mx-3'>
     <h4>Read Data</h4>
     <div className='mb-3' >
      <input type="search" placeholder="Search here..." className='form-control' onChange={inputHandler} />
      {/* <SearchIcon  className='searchIcon' sx={{color:"black",cursor:"pointer",position:"absolute",top:"70px",left:"62%"}}/> */}
     </div>
     <Link to="/">
      <button className='btn btn-warning mx-3 '>Create</button>
     </Link>
   
    </div>
<div className=' col-md-10 col-8 mx-3'>
    <table className={`table ${tabledark}`} >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"> Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  
  {/* for search name and email */}
   {data.filter((el)=>{
   if(el === "") {
    return el;
   } 
   else{
    return(el.name.toLowerCase().includes(input)) ||
    (el.email.toLowerCase().includes(input)) || (el.phone.includes(input))
   }
  }).map((eachData,i) => {
      return(
        <>
        <tbody>
    <tr key={i}>
      <td>{eachData.id}</td>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td>{eachData.phone}</td>
     
      <td>
      <Link to="/update"><button className='btn btn-primary' 
      onClick={()=>setToLocalStorage
      (eachData.id, eachData.name,eachData.email,eachData.phone)}>🖊</button></Link>    
      </td>
     
      <td>
      <button className='btn btn-warning' onClick={()=> handleDelete(eachData.id)}>🗑 </button>
      </td>
    </tr>
  
  </tbody>
  
        </>
      )

    })
  }
</table>
  </div>

    </div>
  )
}

export default Read;
