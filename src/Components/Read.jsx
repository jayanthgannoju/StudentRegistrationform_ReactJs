import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Read.css'

const Read = () => {
  let {id}=useParams()
  let[individual,setIndividual]=useState(null)
  useEffect(()=>{
    let fetchData= async()=>{
      let{data}=await axios.get(`http://localhost:3000/users/${id}`)
      setIndividual(data)
    }
    fetchData()
  },[id])
  return (
    <div className="container">
      {individual == null ? (
        <div className="loading">LOADING.....</div>
      ) : (
        <div className="individual-card">
          <h1 className="name">{individual.name}</h1>
          <div className="details">
            <p><span className="label">Phone:</span> {individual.phone}</p>
            <p><span className="label">Date of Birth:</span> {individual.dob}</p>
            <p><span className="label">Degree:</span> {individual.degree}</p>
            <p><span className="label">Stream:</span> {individual.stream}</p>
            <p><span className="label">Percentage:</span> {individual.percentage}%</p>
            <p><span className="label">Year of Passing:</span> {individual.yop}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Read