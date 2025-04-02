const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../config/authMiddleware');


// Home route (only accessible by logged-in users)
