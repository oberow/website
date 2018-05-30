var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController');

// note routes

/* GET catalog home page. */
//in server.js we do - app.use('/note', noteRouter) to make the base url of the router /note
router.get('/', book_controller.index);

router.get('/:title', book_controller.title);

module.exports = router;