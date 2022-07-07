const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  userId: { type: String, required: true }, // owner of the exercise

  exerciseName: { type: String, required: true }, // name of the exercise E.G Pull ups

  sessionHistory: {
    type: [{ // array of sessions
      date: { type: Date, default: Date.now }, // date of current session

      sets: {
        type: [{ // array of sets for current session

          number: { type: Number }, // current set

          weightKg: { type: Number }, // weight lifted on current set

          repetitions: { type: Number },
        }], // number of repetitions of weight of current set

        default: undefined,
      },
    }],

    default: undefined,
  }
});

module.exports = mongoose.model("Exercise", exerciseSchema);