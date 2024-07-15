const mongoose = require('mongoose');
const { type } = require('os');

const activitySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    workout: {
        type: String,
        required: true,
    },
    time: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Activity', activitySchema);
