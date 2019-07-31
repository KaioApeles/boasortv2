const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.delete('/delete', async (req, res) => {

  try {
      
  const {name} = req.body
  // const {name} = req.body
  // const {email} = req.body
  
  const data = await User.deleteOne({name: name})

  return res.send({data})
  
} catch(err){
  return res.status(400).send({ error: "Cannot Delete"})
}

})

module.exports = app => app.use('/auth', router)