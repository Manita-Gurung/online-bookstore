const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./config/db'); // Import database connection
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const app = express();
// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// Session management
app.use(session({
secret: 'your_secret_key', resave: false, saveUninitialized: true, cookie: { secure: false }
}));
// Database test route
app.get('/db-test', async (req, res) => {
try {
const result = await db.one('SELECT NOW() AS current_time');
res.json({ message: 'Database connected successfully', time:
result.current_time });
} catch (err) {
res.status(500).json({ error: 'Database connection failed', details: err.message });
}
});