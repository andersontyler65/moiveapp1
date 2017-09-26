var express = require('express');
var router = express.Router();
const knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('director')
    .select()
    .orderBy('')
    .then((items) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items));
    })
  res.render('index', {
    title: 'Express'
  })
});

module.exports = router;
