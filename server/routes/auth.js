const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/google', async (req, res) => {
  const { credential } = req.body;

  try {
    // 1. Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const email = payload.email;

    // 2. Check if user exists in DB
    const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    let user = users[0];

    if (!user) {
      // Reject login if user is not found in the database
      return res.status(403).json({ message: 'Access denied. You are not registered in the system.' });
    }

    // Also check if the user is_active
    if (!user.is_active) {
      return res.status(403).json({ message: 'Access denied. Your account is disabled.' });
    }

    // 6. Fetch user roles
    const [userRolesData] = await pool.execute(`
      SELECT r.role FROM roles r
      JOIN userRoles ur ON r.id = ur.role_id
      WHERE ur.user_id = ?
    `, [user.id]);

    const userRoles = userRolesData.map(r => r.role);
    
    // Default to 'student' if no roles found
    if (userRoles.length === 0) {
      userRoles.push('student');
    }

    // 7. Generate custom JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email, roles: userRoles },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '1d' }
    );

    res.status(200).json({ token, roles: userRoles, user: { email: user.email } });
  } catch (error) {
    console.error('Google Auth Error:', error);
    res.status(401).json({ message: 'Invalid Google token' });
  }
});

module.exports = router;
