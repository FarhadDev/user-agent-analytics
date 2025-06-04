const express = require('express');
const app = express();
const PORT = 3000;
const userAgentAnalyticsRoute = require('./route/userAgentAnalytics');
const checkUserAgent = require('./middlewares/userAgentMiddleware');

app.use(express.json());
app.use(checkUserAgent);
app.use(userAgentAnalyticsRoute);




app.listen(PORT, () => { console.log(`Server is running at port ${PORT}`) });