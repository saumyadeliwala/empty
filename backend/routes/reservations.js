const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Get all reservations
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get unavailable times
router.get('/unavailable-times', async (req, res) => {
    try {
        const reservations = await Reservation.find({}, 'time');
        const times = reservations.map(r => r.time);
        res.json(times);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new reservation
router.post('/', async (req, res) => {
    const reservation = new Reservation({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        people: req.body.people,
        time: req.body.time,
        status: 'pending'  // Default status
    });

    try {
        const newReservation = await reservation.save();
        res.status(201).json(newReservation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update reservation status
router.put('/:id/status', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const reservation = await Reservation.findByIdAndUpdate(id, { status }, { new: true });
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: 'Error updating reservation status', error });
    }
});

// Delete reservation
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Reservation.findByIdAndDelete(id);
        res.status(200).json({ message: 'Reservation cancelled and deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting reservation', error });
    }
});

module.exports = router;
