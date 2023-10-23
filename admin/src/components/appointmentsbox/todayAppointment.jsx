import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function TodayAppointment() {
  const [appointments, setAppointments] = useState([]);

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
      hour12: true,
    };
    return new Date(isoDate).toLocaleString(undefined, options);
  };

  // Get the current date in 'YYYY-MM-DD' format
  const todayDate = new Date().toISOString().split('T')[0];

  const filteredAppointments = appointments.filter(appointment => {
    const isConfirmed = appointment.isConfirm;

    // Format the appointment date in 'YYYY-MM-DD' format
    const appointmentDate = appointment.date.split('T')[0];

    // Check if the appointment date matches today's date
    return isConfirmed && appointmentDate === todayDate;
  });

  return (
    <div className="table-responsive">
      <h1 className='text-white'>Today's Reservations</h1>
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
          {filteredAppointments.length === 0 ? (
            <tr>
              <td colSpan="9">No matching appointments found</td>
            </tr>
          ) : (
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
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default TodayAppointment;
