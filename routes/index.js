var express = require('express');
const app = require('../app');
var router = express.Router();
const userRouter=require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user',userRouter)

module.exports = router;
