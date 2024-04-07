const express = require('express');
const router = express.Router();

// Route requiring Admin role
router.post('/add', requireAdmin, (req, res) => {
  // Add job logic
});

// Route requiring Employee role
router.get('/get', requireEmployee, (req, res) => {
  // Get jobs logic
});

module.exports = router;
