const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    message: 'hello from /api/v1/subroute!'
  });
});

module.exports = router;
