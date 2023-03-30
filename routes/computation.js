var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
   
  if (Object.keys(req.query).length === 0) {
        a = Math.pow(Math.random());
        b = Math.sign(Math.random());
        c = Math.tanh(Math.random());
        d = Math.trunc(Math.random());
        res.render('computation', {
            pow: `Math.pow() applied to ${Math.random()} is ${a}`,
            sign: `Math.sign() applied to ${Math.random()} is ${b}`,
            tanh: `Math.tanh() applied to ${Math.random()} is ${c}`,
            trunc: `Math.trunc() applied to ${Math.random()} is ${d}`
        });
  }
  else{
    for (let x in req.query) {
      console.log(x)
      res.render('computation', {
        pow: `Math.pow() applied to ${Math.random()} is ${Math.pow(x)}`,
        sign: `Math.sign() applied to ${Math.random()} is ${Math.sign(x)}`,
        tanh: `Math.tanh() applied to ${Math.random()} is ${Math.tanh(x)}`,
        trunc: `Math.trunc() applied to ${Math.random()} is ${Math.trunc(x)}`
    });   
    }
  }
});
module.exports = router;