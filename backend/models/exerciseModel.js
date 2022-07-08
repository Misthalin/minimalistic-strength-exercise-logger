const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({

  _creator: { type: Schema.Types.ObjectId, ref: "Account" }, // owner/creator of the exercise

  typeOfExercise: { type: String, required: true }, // name of the exercise E.G Pull ups, named by owner

  active: { type: Boolean, default: true }, // if set to true, display exercise, if set to false, hide exercise

  sessions: [{
    date: { type: Date, default: Date.now },  // date of current session

    comment: { type: String }, // add comment to current session

    sets: [{ // array of sets for current session
      number: { type: Number }, // current set

      weightKg: { type: Number }, // weight lifted on current set

      repetitions: { type: Number }, // number of repetitions of weight of current set
    }],
  }], // array of session id related to this exercise.

});

module.exports = mongoose.model("Exercise", exerciseSchema);