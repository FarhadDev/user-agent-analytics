const express = require('express');
const app = express();
const router = express.Router();
const getTestResponse = require('../controllers/userAgentAnalyticsController');

router.get('/analytics/user-agents', getTestResponse);

module.exports = router;
