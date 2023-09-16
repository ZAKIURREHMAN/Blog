const express = require('express')
const User = require('../auth/User')
const router = express.Router()

router.post('/',(req,res)=>{
    const user = User(req.body)
    user.save()
    console.log(req.body)
})
module.exports = router