const express = require('express');
const app = express();
const router = express.Router();
const { getTestResponse, getAnalyticsView } = require('../controllers/userAgentAnalyticsController');

router.get('/analytics/user-agents', getTestResponse);
router.get('/analytics', getAnalyticsView)

module.exports = router;
