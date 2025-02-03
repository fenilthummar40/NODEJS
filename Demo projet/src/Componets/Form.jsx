import React, { useState, useEffect } from 'react';
import './Form.css'

function Form() {
  const [bidNumber, setBidNumber] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [bidTimeRemaining, setBidTimeRemaining] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [numOfVehicles, setNumOfVehicles] = useState('');
  const [materialWeight, setMaterialWeight] = useState('');
  const [response, setResponse] = useState('');
  const [assignedStaff, setAssignedStaff] = useState('');
  const [details, setDetails] = useState('');

  // Retrieve data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('bidFormData'));
    if (savedData) {
      setBidNumber(savedData.bidNumber);
      setCreatedBy(savedData.createdBy);
      setStartDateTime(savedData.startDateTime);
      setBidTimeRemaining(savedData.bidTimeRemaining);
      setFromCity(savedData.fromCity);
      setToCity(savedData.toCity);
      setNumOfVehicles(savedData.numOfVehicles);
      setMaterialWeight(savedData.materialWeight);
      setResponse(savedData.response);
      setAssignedStaff(savedData.assignedStaff);
      setDetails(savedData.details);
    }
  }, []);

  // Handle form submission and store the data
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Get existing data from localStorage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem('bidFormData')) || [];
  
    // Create new entry
    const formData = {
      bidNumber,
      createdBy,
      startDateTime,
      bidTimeRemaining,
      fromCity,
      toCity,
      numOfVehicles,
      materialWeight,
      response,
      assignedStaff,
      details,
    };
  
    // Append the new data
    existingData.push(formData);
  
    // Save updated array back to localStorage
    localStorage.setItem('bidFormData', JSON.stringify(existingData));
  
    alert('Data saved successfully!');
  };
  
  return (
    <div className='ff-1'>
    <div className="f-1">
      <form className='f-11' onSubmit={handleSubmit}>
        <h2>Form</h2>

        <div className='fa-1'>
          <label className='fa-11'>Bid Number:</label>
          <input className='fa-111'
            type="text"
            value={bidNumber}
            onChange={(e) => setBidNumber(e.target.value)}
          />
        </div>
        <div className='fa-1'> 
          <label className='fa-11'>Created By:</label>
          <input className='fa-111'
            type="text"
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
          />
        </div>
        <div className='fa-1'>
          <label  className='fa-11'>Start Date & Time:</label>
          <input className='fa-111'
            type="datetime-local"
            value={startDateTime}
            onChange={(e) => setStartDateTime(e.target.value)}
          />
        </div>
        <div className='fa-1'>
          <label  className='fa-11'>Bid Time Remaining:</label>
          <input className='fa-111'
            type="text"
            value={bidTimeRemaining}
            onChange={(e) => setBidTimeRemaining(e.target.value)}
          />
        </div>
        <div className='fa-1'>
          <label  className='fa-11'>From City:</label>
          <input className='fa-111'
            type="text"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
          />
        </div>
        <div className='fa-1'>
          <label  className='fa-11'>To City:</label>
          <input className='fa-111'
            type="text"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
          />
        </div>
        <div className='fa-1'>
          <label  className='fa-11'>No. of Vehicles:</label>
          <input className='fa-111'
            type="number"
            value={numOfVehicles}
            onChange={(e) => setNumOfVehicles(e.target.value)}
          />
        </div>
        <div className='fa-1'>
          <label  className='fa-11'>Material Weight (in Kg):</label>
          <input className='fa-111'
            type="number"
            value={materialWeight}
            onChange={(e) => setMaterialWeight(e.target.value)}
          />
        </div>
        <div className='fa-1'>
          <label  className='fa-11'>Response:</label>
          <input className='fa-111'
            type="text"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          />
        </div>
        <div className='fa-1'>
          <label  className='fa-11'>Assigned Staff:</label>
          <input className='fa-111'
            type="text"
            value={assignedStaff}
            onChange={(e) => setAssignedStaff(e.target.value)}
          />
        </div>
        <div className='fa-1'>
          <label  className='fa-11'>Details:</label>
          <textarea className='fa-111'
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
    </div>
  );
}

export default Form;
