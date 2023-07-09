const mongoose =require('mongoose')

const { Schema } = mongoose;

const todoSchema = new Schema({
   text:{
    type:String,
   
   },
   desc:{
      type:String,
    require:true
   }
   
  });

  const TODO = new mongoose.model("TODO", todoSchema)
  module.exports= TODO