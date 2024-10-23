import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  let navigate = useNavigate()
  let[editData,setEditData] = useState({
      name:'',
      phone:"",
      dob:'',
      degree:'',
      stream:'',
      percentage:"",
      yop:''
  })
  let{id}=useParams()
  useEffect(()=>{
    let fetchData = async()=>{
      let {data} = await axios.get(`http://localhost:3000/users/${id}`)
      setEditData(data)
    }
    fetchData()
  },[])

  let handleSubmit = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3000/users/${id}`,editData)
    navigate("/")
    location.reload()
  }

  return (
    <>
      <div className="formdiv">
      <form onSubmit={handleSubmit}>
        <h1>Edit Student Details</h1>
      <div  className="form-group">
      <label htmlFor="name">NAME :</label>
      <input type="text" name='name' id='name' value={editData.name} 
      onChange={(e)=>setEditData({...editData,name:e.target.value})}/>
      </div>
      <br /><br />

      <div  className="form-group">
      <label htmlFor="phone">PHONE :</label>
      <input type="number" name='phone' id='phone' value={editData.phone} 
      onChange={(e)=>setEditData({...editData,phone:e.target.value})}/>
      </div>
      <br /><br />

      <div className="form-group">

      <label htmlFor="dob">DOB :</label>
      <input type="date" name='dob' id='dob' value={editData.dob} 
      onChange={(e)=>setEditData({...editData,dob:e.target.value})}/>
      </div>
      <br /><br />
      <div className="form-group">
      <label htmlFor="degree">DEGREE :</label>
      <input type="text" name='degree' id='degree' value={editData.degree} 
      onChange={(e)=>setEditData({...editData,degree:e.target.value})}/>
      </div>
      <br /><br />
      <div className="form-group">
      <label htmlFor="stream">STREAM :</label>
      <input type="text" name='stream' id='stream' value={editData.stream}
      onChange={(e)=>setEditData({...editData,stream:e.target.value})}/>
      </div>
      <br /><br />
      <div className="form-group">
      <label htmlFor="percentage">THROUGHOUT % :</label>
      <input type="text" name='percentage' id='percentage' value={editData.percentage} 
      onChange={(e)=>setEditData({...editData,percentage:e.target.value})}/>
      </div>
      <br /><br />
      <div className="form-group">
      <label htmlFor="yop">YOP :</label>
      <input type="number" name='yop' id='yop' value={editData.yop} 
      onChange={(e)=>setEditData({...editData,yop:e.target.value})}/>
      </div>
      <br /><br />
      <button type="submit">UPDATE</button>
    </form>
      </div>
    </>
  )
}

export default Edit