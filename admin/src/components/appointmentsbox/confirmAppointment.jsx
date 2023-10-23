import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ConfirmAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTableType, setSelectedTableType] = useState("All"); 
  const [selectedDateFilter, setSelectedDateFilter] = useState("All"); 

  useEffect(() => {
    axios.get('http://localhost:5000/api/appointments')
      .then(result => setAppointments(result.data.reverse()))
      .catch(err => {
        console.log(err);
      });
  }, []);


  const formatDateTime = (isoDate) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Use AM/PM
    };
    return new Date(isoDate).toLocaleString(undefined, options);
  };

  const filteredAppointments = appointments.filter(appointment => {
    const includesSearchTerm = Object.values(appointment).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const matchesTableType = selectedTableType === "All" || appointment.tableType === selectedTableType;
  
    const matchesDateFilter = selectedDateFilter === "All" || formatDateTime(appointment.date).includes(selectedDateFilter);
  
    const isConfirmed = appointment.isConfirm;
  
    return includesSearchTerm && matchesTableType && matchesDateFilter && isConfirmed;
  });
  

  return (
    <div className="table-responsive">
      <h1 className='text-white'>Confirm Reservation</h1>
      
      <div>
        <input
          type="text"
          placeholder="Search by name, email, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedTableType}
          onChange={(e) => setSelectedTableType(e.target.value)}
        >
          <option value="All">All Table Types</option>
          <option value="NonVIP">Non-VIP</option>
          <option value="SemiVIP">Semi-VIP</option>
          <option value="VIP">VIP</option>
        </select>

        <select
          value={selectedDateFilter}
          onChange={(e) => setSelectedDateFilter(e.target.value)}
        >
          <option value="All">All Dates</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>Number of Person</th>
            <th>Table Type</th>
            <th>Date and Time</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
        {filteredAppointments.length === 0 ? 
          <tr><td colSpan="9">No matching appointments found</td></tr> :
          filteredAppointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.name}</td>
              <td>{appointment.email}</td>
              <td>{appointment.contactNo}</td>
              <td>{appointment.numberOfPerson}</td>
              <td>{appointment.tableType}</td>
              <td>{formatDateTime(appointment.date)}</td>
              <td>{appointment.notes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ConfirmAppointment;
