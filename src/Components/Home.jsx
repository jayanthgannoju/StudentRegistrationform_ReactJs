import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
  let navigate = useNavigate()
  let [details,setDetails]=useState(null)
  useEffect(()=>{
    let fetchData=async()=>{
      let{ data }=await axios.get("http://localhost:3000/users")
      setDetails(data)
    }
    fetchData()
  },[])
  let handleDelete = (id)=>{
    axios.delete(`http://localhost:3000/users/${id}`)
    location.reload()
  } 
  return (
    <>
    <nav>
      <h1>Student Registration form</h1>
    <Link to="/create"><button id='btn'>Register</button></Link>
    </nav>
    <div id='table'>
    <table border={2} width="100%">
        <thead>
            <tr>
                <th>SL.NO</th>
                <th>NAME</th>
                <th>PHONE</th>
                <th>DOB</th>
                <th>DEGREE</th>
                <th>STREAM</th>
                <th>THROUGHOUT %</th>
                <th>YOP</th>
            </tr>
        </thead>
        <tbody>
          {details == null?<></>
          :details.map((ele,index)=>{
            return <Fragment key={index}>
              
              <tr>
              <td>{index+1}</td>
              <td>{ele.name}</td>
              <td>{ele.phone}</td>
              <td>{ele.dob}</td>
              <td>{ele.degree}</td>
              <td>{ele.stream}</td>
              <td>{ele.percentage}</td>
              <td>{ele.yop}</td>
              <td><button onClick={()=>navigate(`/read/${ele.id}`)} className='btn-tables'>Read</button></td>
              <td><button onClick={()=>navigate(`/edit/${ele.id}`)} className='btn-tables2'>Edit</button></td>
              <td><button onClick={()=>handleDelete(ele.id)} className='btn-tables1'>Delete</button></td>
            </tr>
            </Fragment>
          })}
        </tbody>
    </table>
    </div>
    </>
  )
}

export default Home