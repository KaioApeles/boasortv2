const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.post('/register', async (req, res) => {
  
  const {email} = req.body
  
  try {

    if(await User.findOne({email}))
      return res.status(400).send({ error: 'User already exists!' })

    const userData = await User.create(req.body)

    userData.password = undefined

    return res.send({ userData })

  } catch (err){
    return res.status(400).send({ error: 'Registration failed' })
  }  
})

module.exports = app => app.use('/auth', router)