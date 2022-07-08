const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    _exercise: { type: Schema.Types.ObjectId, ref: "Exercise"}, // id of exercise connected to this session
  
    date: { type: Date, default: Date.now },  // date of current session
  
    comment: { type: String }, // add comment to current session
  
    sets: [{ // array of sets for current session
        number: { type: Number }, // current set
  
        weightKg: { type: Number }, // weight lifted on current set
  
        repetitions: { type: Number }, // number of repetitions of weight of current set
      }], 
  
  })
  
  module.exports = mongoose.model("Session", sessionSchema);