const express = require('express')
const router = express.Router()
const Show = require('../models/Show')
router.use(express.json())

router.get('/', async (req, res) => {
          const show = await Show.findAll()
          res.send(show)
});

router.get('/:id', async (req, res) => {
          const show = await Show.findByPk(req.params.id)
          res.send(show)
});

router.get('/genres/:genre:', async (req, res) => {
          const show = await Show.findByPk(req.params['genre:'])
          res.send(show)
});

router.put('/:id/watched', async (req, res) => {
          const show = await Show.update(req.params.id.showId, req.body)
          res.send(show)
});

module.exports = router