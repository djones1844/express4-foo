var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('foo', { title: 'Get some Foo on U' })
})
  .post('/', (req, res, next) => {
    res.send('POST me a little foo')
  })
  .put('/', (req, res, next) => {
    res.send('PUT up with all the foo')
  })

  .delete('/', (req, res, next) => {
    // simple middleware example
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next()
  }, (req, res, next) => {
    res.send('DELETE all foo')
  })

module.exports = router
