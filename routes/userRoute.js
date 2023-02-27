const express = require('express')
const { where } = require('sequelize')
const db = require('../db')
const router = express.Router()
const User = require('../models/User')
router.use(express.json())

router.get('/', async (req, res) => {
          const users = await User.findAll()
          res.send(users)
});

router.get('/:id', async (req, res) => {
          const user = await User.findByPk(req.params.id)
          res.send(user)
});

router.get('/:id/shows', async (req, res) => {
          const user = await User.findByPk(req.params.id, {include: [{model: Show}]})
          res.send(user)
});

router.put('/:id/shows/:showId', async (req, res) => {
          const user = await User.findByPk(req.params.id)
          const updatedUser = await user.update(user[req.params.showId])
          res.send(updatedUser)
});

module.exports = router