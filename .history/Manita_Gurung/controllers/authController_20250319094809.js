const bcrypt = require('bcryptjs');
const db = require('../config/db');
// Signup
exports.registerUser = async (req, res) => {
const { name, email, password } = req.body;
const hashedPassword = await bcrypt.hash(password, 10);
try {
await db.none('INSERT INTO users (name, email, password) VALUES($1, $2, $3)', [name, email, hashedPassword]);
res.status(201).json({ message: 'User registered successfully' });
} catch (err) {
res.status(500).json({ error: 'Error registering user' });
}
};
// Login
exports.loginUser = async (req, res) => {
const { email, password } = req.body;