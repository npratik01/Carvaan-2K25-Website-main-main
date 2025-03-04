const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: String,
    venue: String
});

module.exports = mongoose.model('Event', EventSchema);
