const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  
  _creator: { type: Schema.Types.ObjectId, ref: "Account" }, // owner/creator of the exercise

  typeOfExercise: { type: String, required: true }, // name of the exercise E.G Pull ups, named by owner

  active: { type: Boolean, default: true }, // if set to true, display exercise, if set to false, hide exercise

  sessions: [{ type: Schema.Types.ObjectId, ref: "Session" }], // array of session id related to this exercise.

});


module.exports = mongoose.model("Exercise", exerciseSchema);