const mongoose=require('mongoose')
const questionSchema = mongoose.Schema({
  exercise_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exersise",
    required: true,
  },
  question_type: {
    type: String,
    enum: ["MCQs", "long question", "maths question"],
    required: true,
  },
  question_text: { type: String, required: true },
  options: [
    {
      text: { type: String, default: null },
      image: { type: String, default: null },
    },
  ],
  correct_answer: { type: String, required: true },
});
module.exports=mongoose.model('Question', questionSchema)