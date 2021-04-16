const checkInternet = require('./src/checkInternet');
const initLogFile = require('./src/initLogFile');

const logFileStream = initLogFile();

const timeout = process.argv.slice(2)[0] || 30000;

setInterval(() => checkInternet(logFileStream), timeout);
