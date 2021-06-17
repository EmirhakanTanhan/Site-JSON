const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'deneme GET'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'deneme POST'
    });
});

module.exports = router;