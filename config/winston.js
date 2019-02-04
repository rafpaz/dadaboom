const appRoot = require('app-root-path');
const { createLogger, format, transports } = require('winston');

const {
  combine, timestamp, label, printf,
} = format;

const myFormat = printf((info) => {
  const {
    timestamp: iTimestamp, iLabel, level, message,
  } = info;
  return `{"timestamp": "${iTimestamp}", "label": "${iLabel}", "level": "${level}", "message": "${message}"}`;
});

const myFormat2 = printf(info => `${info.message}`);

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
    format: combine(
      timestamp(),
      myFormat2,
    ),
  },
  fileErrors: {
    level: 'error',
    filename: `${appRoot}/logs/errors.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
    format: combine(
      label({ label: 'right meow!' }),
      timestamp(),
      myFormat,
    ),
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
const logger = createLogger({

  transports: [
    new transports.File(options.file),
    new transports.File(options.fileErrors),
    new transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write(message) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = logger;
