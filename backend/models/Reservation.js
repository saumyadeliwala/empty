const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  people: { type: Number, required: true },
  time: { type: String, required: true },
  status: { type: String, default: 'pending' } // Added status field
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
