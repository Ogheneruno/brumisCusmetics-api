const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({success: true, message: 'Hello welcome to BRUMIS Cosmetics'});
})


module.exports = router;