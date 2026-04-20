var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
  console.log('First Name:', req.body.firstname);
  console.log('Last Name:', req.body.lastname);

  res.send('POST received');
});

module.exports = router;