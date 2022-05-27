const express = require('express');
const router = express.Router();
const techRoutes = require('./techs.route');

router.use('/techs', techRoutes);
module.exports = router;