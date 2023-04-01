const mongoose=require('mongoose')
const exersieSchema=mongoose.Schema({
    question:{
        type:String,
        required:[true,'plz add question']

    },
    answer:{
        type:String,
        required:[true,'plz add Answer']

    },
},
{timestamps:true
})

module.exports=mongoose.model('Exersise', exersieSchema)