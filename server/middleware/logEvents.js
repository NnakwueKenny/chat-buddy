// CommonJS Modules
const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

// Installed Modules
const {format} = require('date-fns');
const {v4: uuid} = require('uuid');

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}  ${uuid()}  ${message}`;
    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), `\n${logItem}`);
    } catch (err) {
        console.log(err);
    }
}

const logger = (req, res, next) => {
    // console.log(`${req.method} ${req.path}`);
    logEvents(`${req.method} ${req.headers.origin} ${req.url}`, 'requestLog.txt');
    next(); 
}

module.exports = {logger, logEvents};