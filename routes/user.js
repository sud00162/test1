const express = require('express');
const router = express.Router();

const {CourseUser} = require('../controllers/user.js');

router.post("/course", CourseUser);

module.exports = router;