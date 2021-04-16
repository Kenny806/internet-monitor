const dns = require('dns');

const getTimeStamp = require('./getTimeStamp');
const checkURLAvailable = require('./checkURLAvailable');

const checkInternet = async (logFileStream) => {
    const dnsPromise = await new Promise((resolve) => {
        dns.lookup('google.com', (err) => {
            if (err && err.code == 'ENOTFOUND') {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });

    const googleResults = await checkURLAvailable('https://www.google.com');
    const seznamResults = await checkURLAvailable('https://www.seznam.cz');

    logFileStream.write(
        `${getTimeStamp()};${dnsPromise};${googleResults.urlAvailable};${
            googleResults.timer
        };${seznamResults.urlAvailable};${seznamResults.timer}\n`
    );
};

module.exports = checkInternet;
