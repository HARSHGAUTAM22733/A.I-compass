const {Schema, model} = require('../connection');

const contactSchema = new Schema({
    fullName: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    subject: {
        type: String, 
        required: true
    },
    message: {
        type: String, 
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'responded', 'closed'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('contacts', contactSchema);