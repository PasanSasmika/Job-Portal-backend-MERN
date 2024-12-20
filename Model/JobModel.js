import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

  title: {
     type: String, 
     required: true 
    },
  companyName: {
     type: String,
      required: true
    },
  minSalary: {
     type: Number,
      required: true 
    },
  maxSalary: {
    type: Number,
     required: true 
    },
  salaryType: { 
    type: String, 
    enum: ['Hourly', 'Daily', 'Weekly', 'Monthly', 'Yearly'], 
    required: true 
  },
  location: {
     type: String, 
     required: true 
    },
  postDate: {
     type: Date,
      default: Date.now
     },
  experienceLevel: { 
    type: String, 
    enum: ['Entry Level', 'Mid Level', 'Senior Level'], 
    required: true 
  },
  requiredSkills: [{ type: String }],
  companyLogo: {
     type: String
     },
  employeeType: { 
    type: String, 
    enum: ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'], 
    required: true 
  },
  description: {
     type: String,
      required: true },
  email: { 
    type: String, 
    required: true, 
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'] 
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Job = mongoose.model('Job', jobSchema);
export default Job;
