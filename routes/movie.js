var express = require('express')
var router = express.Router()
const knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('movie')
  .select('id', 'title', 'year', 'director_id')
  .orderBy('id')
  .then((items) => {
    res.setHeader ('Content-Type', 'application/json')
    res.send(JSON.stringify(items))
  })
  .catch((err) => next(err))
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  knex('movie')
  .select('id', 'title', 'year', 'director_id')
  // .where(id=req.params.id)
  .then((items) => {
    res.setHeader ('Content-Type', 'application/json')
    res.send(JSON.stringify(items[id]))
  })
  .catch((err) => next(err))
})

module.exports = router
