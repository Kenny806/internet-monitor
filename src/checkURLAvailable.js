const https = require('https');

const checkURLAvailable = async (url) => {
    let timer = Date.now();
    const urlAvailable = await new Promise(async (resolve) => {
        https
            .get(url, (res) => {
                timer = Date.now() - timer;
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .on('error', () => {
                resolve(false);
            });
    });

    return {timer, urlAvailable};
};

module.exports = checkURLAvailable;
