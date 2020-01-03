const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
