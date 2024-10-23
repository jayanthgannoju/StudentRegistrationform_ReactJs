import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      dob: '',
      degree: '',
      stream: '',
      percentage: '',
      yop: '',
    },
    onSubmit: async (data) => {
      try {
        await axios.post('http://localhost:3000/users', data);
        navigate('/');
      } catch (error) {
        console.error('There was an error registering the user!', error);
      }
    },
  });

  const { name, phone, dob, degree, stream, percentage, yop } = formik.values;

  return (
    <div className="formdiv">
      <form onSubmit={formik.handleSubmit}>
        <h1>Registration Page</h1>
        
        <div className="form-group">
          <label htmlFor="name">NAME:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={formik.handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">PHONE:</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={formik.handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="dob">DOB:</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={formik.handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="degree">DEGREE:</label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={degree}
            onChange={formik.handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="stream">STREAM:</label>
          <input
            type="text"
            name="stream"
            id="stream"
            value={stream}
            onChange={formik.handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="percentage">THROUGHOUT %:</label>
          <input
            type="number"
            name="percentage"
            id="percentage"
            value={percentage}
            onChange={formik.handleChange}
            min="0"
            max="100"
            step="0.01"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="yop">YOP:</label>
          <input
            type="number"
            name="yop"
            id="yop"
            value={yop}
            onChange={formik.handleChange}
            min="1900"
            max="2100"
            required
          />
        </div>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Create;
