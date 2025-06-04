const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../userAgents.json');


const getTestResponse = (req, res) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const agents = JSON.parse(data);

        const agentCounts = {};

        agents.forEach(agent => {
            const userAgent = typeof agent === 'string' ? agent : null;

            let label = 'Other';

            if (/PostmanRuntime/i.test(userAgent)) {
                label = 'Postman';
            } else if (/Thunder Client/i.test(userAgent)) {
                label = 'Thunder Client';
            } else if (/curl/i.test(userAgent)) {
                label = 'curl';
            } else if (/Chrome/i.test(userAgent) && !/Edge|Edg/i.test(userAgent)) {
                label = 'Chrome Browser';
            } else if (/Edge|Edg/i.test(userAgent)) {
                label = 'Edge Browser';
            } else {
                // Try to extract the first product/token from the User Agent string
                const match = userAgent.match(/^[^\s\/]+/);
                if (match && match[0]) {
                    label = match[0];
                }
            }

            if (agentCounts[label]) {
                agentCounts[label]++;
            } else {
                agentCounts[label] = 1;
            }
        })
        res.status(200).json(agentCounts);

    } catch (error) {
        console.error('Error reading or processing userAgents.json:', error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

module.exports = getTestResponse;