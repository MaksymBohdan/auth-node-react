const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  password: { type: String },
  email: { type: String, required: true, unique: true },
  active: { type: Boolean, required: true, default: false },
  temporaryToken: { type: String },
  passwordResetToken: { type: String }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
