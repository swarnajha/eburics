const express = require('express')
const mongoose =require('mongoose')
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('./controllers/controller')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = 3001

const router = express.Router();
 
router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)


app.use(express.json())
app.use(cors())
mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})