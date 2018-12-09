const express = require('express');
const router = express.Router();
const generateAnswer = require('../utils/bot/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendMessage', function(req, res, next) {
  const { message } = req.body

  return res.json({
      "message": generateAnswer(message)
  })
})

module.exports = router;
