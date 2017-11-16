var express = require('express');
var router = express.Router();

var note_controller = require('../controllers/noteController');

// note routes

/* GET catalog home page. */
router.get('/', note_controller.index);

router.get('/:title', note_controller.title);

module.exports = router;