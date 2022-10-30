var express = require('express');
var router = express.Router();

/* GET accounts listings. */
router.get('/', function(req, res, next) {
  res.send('leaveee');
});


/* sign up for new account. */
router.get('/signup', function(req, res, next) {
  // res.send('leaveee');
  res.render('signup', { logo:'ojs', title: 'sign up' });
});

/* sign up for new account. */
router.post('/signup', function(req, res, next) {
  // res.send('leaveee');
  res.render('result', { 
    logo:'ojs', 
    title: 'sign up', 
    fname: req.body.fname,
    lname:req.body.lname,
    email: req.body.email
   });
});
module.exports = router;
