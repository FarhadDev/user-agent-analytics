const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const userAgentAnalyticsRoute = require('./route/userAgentAnalytics');
const checkUserAgent = require('./middlewares/userAgentMiddleware');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(checkUserAgent);
app.use(userAgentAnalyticsRoute);




app.listen(PORT, () => { console.log(`Server is running at port ${PORT}`) });