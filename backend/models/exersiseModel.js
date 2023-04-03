const mongoose=require('mongoose')
const exersieSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports=mongoose.model('Exersise', exersieSchema)