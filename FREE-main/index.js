const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const mongoose=require("mongoose")
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("./controllers/controller")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())




app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
            res.json([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})


const router = express.Router();
 
router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)


app.use(express.json())
app.use(cors())




mongoose
.connect("mongodb+srv://swarnajha2018:swarna071@cluster0.iqs89q6.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))


app.use(router);

app.listen(8000,()=>{
    console.log(`port connected to 8000`);
})

