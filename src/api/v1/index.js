const router = require('express').Router();
const subroute = require('./subroute');

router.get('/', (req, res) => {
  res.json({
    message: 'v1 base route'
  });
});

router.use('/subroute', subroute);

module.exports = router;
