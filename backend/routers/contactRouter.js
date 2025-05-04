const express = require('express');
const Model = require('../models/contactModel');

const router = express.Router();

// Add a new contact message
router.post('/add', (req, res) => {
    console.log('Contact form submission received:', req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json({
                message: 'Message sent successfully',
                data: result
            });
        }).catch((err) => {
            console.error('Contact form error:', err);
            res.status(500).json({
                message: 'Internal Server Error',
                error: err
            });
        });
});

// Get all contact messages
router.get('/getall', (req, res) => {
    Model.find()
        .sort({ createdAt: -1 }) // Sort by newest first
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json({
                message: 'Internal Server Error',
                error: err
            });
            console.error(err);
        });
});

// Get a specific contact message by ID
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Contact message not found' });
            }
        }).catch((err) => {
            res.status(500).json({
                message: 'Internal Server Error',
                error: err
            });
            console.error(err);
        });
});

// Update contact status
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            if (result) {
                res.status(200).json({
                    message: 'Contact message updated',
                    data: result
                });
            } else {
                res.status(404).json({ message: 'Contact message not found' });
            }
        }).catch((err) => {
            res.status(500).json({
                message: 'Internal Server Error',
                error: err
            });
            console.error(err);
        });
});

// Delete a contact message
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (result) {
                res.status(200).json({
                    message: 'Contact message deleted',
                    data: result
                });
            } else {
                res.status(404).json({ message: 'Contact message not found' });
            }
        }).catch((err) => {
            res.status(500).json({
                message: 'Internal Server Error',
                error: err
            });
            console.error(err);
        });
});

module.exports = router;