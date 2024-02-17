// RegisterCustomer.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerCustomer } from '../../reducer/customerSlice';

function RegisterCustomer() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    adharNumber: '',
    registrationDate: '',
    assignedMobileNumber: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerCustomer(formData));
    // history.push('/customers');
  };

  return (
    <div className="container">
      <h2>Register New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="adharNumber">Adhar Number</label>
          <input type="text" className="form-control" id="adharNumber" name="adharNumber" value={formData.adharNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="registrationDate">Registration Date</label>
          <input type="date" className="form-control" id="registrationDate" name="registrationDate" value={formData.registrationDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="assignedMobileNumber">Assigned Mobile Number</label>
          <input type="text" className="form-control" id="assignedMobileNumber" name="assignedMobileNumber" value={formData.assignedMobileNumber} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default RegisterCustomer;
