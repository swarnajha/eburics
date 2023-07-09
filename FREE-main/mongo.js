// const mongoose=require("mongoose")
// mongoose.connect("mongodb+srv://swarnajha2018:swarna071@cluster0.iqs89q6.mongodb.net/?retryWrites=true&w=majority")
// .then(()=>{
//     console.log("mongodb connected");
// })
// .catch(()=>{
//     console.log('failed');
// })


const mongoose=require("mongoose")

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})



const collection = mongoose.model("collection",newSchema)



module.exports=collection
