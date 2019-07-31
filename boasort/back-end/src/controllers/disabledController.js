const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.put('/:id', async (req, res) => {

  const {id} = req.params
  const {disabled} = req.body

  try {    
  const data = await User.findOneAndUpdate(
    { _id: id },
    { $set: { disabled: (disabled == true)? false : true } }
  )
  return res.send({data})
  
} catch(err){
  if(err == null)
    return res.status(400).send({ error: "User not found"})
  else
    return res.status(400).send({ error: "Invalid ID"})
}

})

module.exports = app => app.use('/disabled', router)