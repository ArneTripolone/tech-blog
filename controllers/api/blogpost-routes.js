const router = require('express').Router();

const clog = require('../../utils/colorLogging');

// logs 'hello world' in Insomnia, but 404 in inspector
router.get('/', function (req, res) {
  res.send('hello world')
})

module.exports = router;