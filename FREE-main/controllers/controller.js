const TODOmodel =require('../models/model')

module.exports.getToDo= async(req,res)=>{
const toDo =await TODOmodel.find()
res.send(toDo)
}


module.exports.saveToDo= async(req,res)=>{

    const {text,desc}=req.body
    
     TODOmodel
     .create({text,desc})
     .then((data)=>{
        console.log("added");
        console.log(data);
        res.send({data})
     })
    }

    module.exports.updateToDo= async(req,res)=>{
      const {_id,text}=req.body
      TODOmodel
      .findByIdAndUpdate(_id,{text})
      .then(()=>res.send("updated"))
      .catch((err)=>console.log(err))
      }

      module.exports.deleteToDo= async(req,res)=>{
         const {_id,text}=req.body
         TODOmodel
         .findByIdAndDelete(_id)
         .then(()=>res.send("deleted"))
         .catch((err)=>console.log(err))
         }