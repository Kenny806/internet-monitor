# internet-monitor

A stupid-simple script intended for logging information about internet connection. Each connection check writes the following information into the log file:
 * date
 * time 
 * DNS response (boolean)
 * google.com response (boolean)
 * time for google.com response (in ms)
 * seznam.cz response (boolean)
 * time for seznam.cz response (in ms)

The URLs being requested are currently not configurable.

The data is being logged into a .csv file in the `results` folder. The file name is generated from the current date in the following pattern: `YYYY_MM_DD.csv`.

## Usage
Requires Node.js (https://nodejs.org/en/download/)
* Clone or download the project
* Run `node index.js [timeout]` in the project's root folder
* Press Ctrl+C to terminate

The `timeout` parameter is optional and specifies the time in ms between individual connection checks. Default value is 30 000.
