import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReservationForm.css';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState(1);
  const [time, setTime] = useState('');
  const [unavailableTimes, setUnavailableTimes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reservations/unavailable-times')
      .then(response => setUnavailableTimes(response.data))
      .catch(error => console.error('Error fetching unavailable times:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = { name, phone, email, people, time };
    axios.post('http://localhost:5000/api/reservations', reservation)
      .then(response => alert('Reservation successful!'))
      .catch(error => alert('Error making reservation:', error));
  };

  return (
    <div className="reservation-container">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Number of People:
          <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} min="1" max="4" required />
        </label>
        <label>
          Select Time:
          <select value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="" disabled>Select a time</option>
            {['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'].map(t => (
              <option key={t} value={t} disabled={unavailableTimes.includes(t)}>{t} {unavailableTimes.includes(t) ? '(Full)' : ''}</option>
            ))}
          </select>
        </label>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
