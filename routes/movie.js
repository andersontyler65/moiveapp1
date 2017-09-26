var express = require('express');
var router = express.Router();
const knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('movie')
    .select('id', 'title', 'year', 'director_id')
    .orderBy('id')
    .then((items) => {
       res.setHeader ('Content-Type', 'application/json')
      res.send(JSON.stringify(items));
    })
    .catch((err) => next(err))
    console.log('in movie.js')
});
// if (items.length<1) {
//   return res.sendStatus(404)
// }

module.exports = router;
