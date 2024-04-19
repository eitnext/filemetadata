const express = require('express');
const upload = require('../utils/upload');

const fileAnalyseController = require('../controllers/fileAnalyseController')

const router = express.Router();

router.route('/fileanalyse')
    .post( upload.single('upfile') ,fileAnalyseController.getFile);




module.exports = router;