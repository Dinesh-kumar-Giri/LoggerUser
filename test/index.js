
// import { StreamLogger } from "loggeruser";
const { StreamLogger} = require("loggeruser")



const logger = new StreamLogger({
    enabled: true,
    level: "error", // The log level (default: LogLevel.ERROR)
  });


logger.info('This is an informational message.');
logger.warn('This is a warning message.');
logger.debug('this is a debug message')
logger.error('This is an error message.');