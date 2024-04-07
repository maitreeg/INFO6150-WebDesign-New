const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true
        },
        jobTitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            required: true
        },
        location:{
            type: String,
            required: false
        }
    },
  { collection: "jobs" }
);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
