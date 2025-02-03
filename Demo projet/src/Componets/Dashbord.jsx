import React, { useEffect, useState } from 'react';
import './Dashbord.css';


function Dashbord() {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('bidFormData'));
    if (savedData) {
      setFormDataList(savedData); // Set data as an array
    }
  }, []);




  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">LOGO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active  x-1" aria-current="page" href="/">Did</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">POD</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Vendor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="singupForm">User</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="main">
        <div className="left-side">
          <ul>
            <li><a href="">Bid</a></li>
            <li><a href="">POD</a></li>
            <li><a href="">Vendor</a></li>
            <li><a href="/SingupForm">User</a></li>
            <li><a href="/Form">Form</a></li>
          </ul>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <ul>
            <li><a href="">Setting</a></li>
            <li><a href="">Profile</a></li>
            <li><a href="">Contact US</a></li>
            <li><a href="">Logout</a></li>
          </ul>
        </div>

        <div className="right-side">
          <div className="nav-2">
            <ul>
              <li><a href="">Live</a></li>
              <li><a href="">Results</a></li>
              <li><a href="">History</a></li>
              <li><input type="text" name="" id="" placeholder="Search" /></li>
            </ul>
          </div>

          <div className="table">
            {formDataList.length > 0 ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Bid Number</th>
                    <th>Created By</th>
                    <th>Start Date & Time</th>
                    <th>Bid Time Remaining</th>
                    <th>From City</th>
                    <th>To City</th>
                    <th>No. of Vehicles</th>
                    <th>Material Weight</th>
                    <th>Response</th>
                    <th>Assigned Staff</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {formDataList.map((data, index) => (
                    <tr key={index}>
                      <td>{data.bidNumber}</td>
                      <td>{data.createdBy}</td>
                      <td>{data.startDateTime}</td>
                      <td>{data.bidTimeRemaining}</td>
                      <td>{data.fromCity}</td>
                      <td>{data.toCity}</td>
                      <td>{data.numOfVehicles}</td>
                      <td>{data.materialWeight}</td>
                      <td>{data.response}</td>
                      <td>{data.assignedStaff}</td>
                      <td className='d-11' id='dd-1'><a href="/Detailpage">{data.details}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
