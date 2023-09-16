const db = require('./db')
db()
const UserModels = require('./auth/User')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000;
app.use(cors())
app.use(express.urlencoded())
app.use(express.json({limit:"10mb"}))
app.use('/blogapi',require('./mod/modules'))
app.use('/getblogingapi',async(req,res)=>{
  const getuserdata = await UserModels.find({})
  res.send({status:"ok",data:getuserdata})
})
app.use('/deletdata/:id',async(req,res)=>{
  const  {id} = req.params;
   await UserModels.findByIdAndDelete({_id:id})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

