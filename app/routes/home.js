let express = require('express');
let router = express.Router();

const homeController = require('../controllers/HomeController');

router.get('/', homeController.index);

module.exports = router;