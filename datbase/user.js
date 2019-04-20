const mongoose =
require('mongoose');
var USERESCHEMA ={
  name: String,
  lastname: String,
  address: String,
  age: Number,
  nickname: String,
  password: String,
  registerDate: Date,
  updateDate: Date,
}
const USER = mongoose.model("user", USERESCHEMA);
module.exports = USER;
