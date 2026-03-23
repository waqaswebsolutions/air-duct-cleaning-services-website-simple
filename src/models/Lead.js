import mongoose from 'mongoose'

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    match: [/.+\@.+\..+/, 'Please provide a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
  },
  message: {
    type: String,
    default: '',
  },
  package: {
    type: String,
    default: 'simple',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema)