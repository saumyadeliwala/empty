import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const statusColors = {
  pending: '#f0ad4e',
  confirmed: '#5cb85c',
  arrived: '#5bc0de',
  late: '#f0ad4e',
  cancelled: '#d9534f'
};

const AdminPanel = () => {
  const [reservations, setReservations] = useState([]);
  const [editingStatus, setEditingStatus] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/reservations')
      .then(response => setReservations(response.data))
      .catch(error => console.error('Error fetching reservations:', error));
  }, []);

  const handleStatusChange = (id, status) => {
    setEditingStatus({ ...editingStatus, [id]: status });
  };

  const handleSave = (id) => {
    const status = editingStatus[id];
    if (status === 'cancelled') {
      axios.delete(`http://localhost:5000/api/reservations/${id}`)
        .then(() => {
          setReservations(reservations.filter(reservation => reservation._id !== id));
          setEditingStatus({ ...editingStatus, [id]: null });
        })
        .catch(error => console.error('Error deleting reservation:', error));
    } else {
      axios.put(`http://localhost:5000/api/reservations/${id}/status`, { status })
        .then(response => {
          setReservations(reservations.map(reservation =>
            reservation._id === id ? { ...reservation, status } : reservation
          ));
          setEditingStatus({ ...editingStatus, [id]: null });
        })
        .catch(error => console.error('Error updating status:', error));
    }
  };

  return (

    <div className="wrapper_admin-container">
      <div className="admin-container">
        <h1>Dashboard</h1>
        <h2>Reservations</h2>
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>People</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map(reservation => (
              <tr key={reservation._id}>
                <td data-table ="Name">{reservation.name}</td>
                <td data-table ="Phone">{reservation.phone}</td>
                <td data-table ="Email">{reservation.email}</td>
                <td data-table ="People">{reservation.people}</td>
                <td data-table ="Time">{reservation.time}</td>
                <td data-table ="Status">
                  <select
                    value={editingStatus[reservation._id] || reservation.status}
                    onChange={(e) => handleStatusChange(reservation._id, e.target.value)}
                    style={{ backgroundColor: statusColors[editingStatus[reservation._id] || reservation.status] }}
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="arrived">Arrived</option>
                    <option value="late">Late</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td data-table ="Action">
                  <button onClick={() => handleSave(reservation._id)}>Save</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
