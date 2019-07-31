const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.get('/:id', async (req, res) => {

  try {
      
  const {id} = req.params
  
  const data = (id == 'all') ? await User.find() : await User.findOne({_id: id})

  return res.send({data})
  
} catch(err){
  if(err == null)
    return res.status(400).send({ error: "User not found"})
  else
    return res.status(400).send({ error: "Invalid ID"})
}

})

module.exports = app => app.use('/get', router)