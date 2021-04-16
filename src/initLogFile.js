const fs = require('fs');

const initLogFile = () => {
    const date = new Date();
    const filename = `${date.getFullYear()}_${
        date.getMonth() + 1
    }_${date.getDate()}.csv`;

    fs.mkdir('results', 0o777, (err) => {
        if (err && err.code !== 'EEXIST') {
            console.error(err);
        }
    });

    const exists = fs.statSync(`results/${filename}`, {throwIfNoEntry: false}); // sync is fine for local script, but big no-no for a server
    const stream = fs.createWriteStream(`results/${filename}`, {flags: 'a'});

    if (exists === undefined) {
        // if log file was newly created, add header
        stream.write(
            'Date;Time;DNS_responds;google_responds;google_response_time;seznam_responds;seznam_response_time\n'
        );
    }

    return stream;
};

module.exports = initLogFile;
