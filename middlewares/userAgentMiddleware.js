const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../userAgents.json');




const checkUserAgent = (req, res, next) => {
    try {
        const userAgent = req.headers['user-agent'];
        //Checking if the file is already exist or not
        //If the file is not there we will ceate one dynamically

        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify([]));
        }

        //Read existing user agents from the file

        const existingUserAgent = fs.readFileSync(filePath, 'utf8');
        let agents = [];

        try {
            agents = JSON.parse(existingUserAgent);

        } catch (pasreErr) {
            console.log('There is a error while parsing user agent file');
            agents = [];
        }

        //Add the current user agent and timestamp
        agents.push(userAgent);

        //write back to the file
        fs.writeFileSync(filePath, JSON.stringify(agents, null, 2));

    } catch (error) {
        console.log('There is an error while logging user agent');
    }
    next();

}

module.exports = checkUserAgent;