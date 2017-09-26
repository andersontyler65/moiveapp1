var express = require('express');
var router = express.Router();
const knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('director')
    .select('name', 'nationality')
    .orderBy('id')
    .then((items) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items));
    })
  .catch((err) => next(err))
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  knex('director')
  .select('')
  .where('id', id)
  .first()
  .then((items) => {
    res.setHeader ('Content-Type', 'application/json')
    res.send(JSON.stringify(items))
  })
  .catch((err) => next(err))
})

router.post('/', (req, res, next) => {
  //const { item } = req.body
  knex('director')
  .insert(req.body, 'id')
    .then((id)=> {
      res.setHeader ('Content-Type', 'application/json')
      res.sendStatus(200)
    })
    .catch((err) => next(err))
})

router.patch('/:id', (req, res, next) => {

  const id = req.params.id

  knex('director')
  .update(req.body, 'id')
  .where('id', id)
  .then((rowsAffected) => {
    if (!rowsAffected) {
      return res.sendStatus(404)
    }
    res.sendStatus(200)
  })
  .catch((err) => next(err))
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  knex('director')
    .del()
    .where('id', id)
    .then((rowsAffected) => {
      if (!rowsAffected) {
        return res.sendStatus(404)
      }
      res.sendStatus(200)
    })
      .catch((err) => next(err))
})


module.exports = router;
