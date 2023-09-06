import LogLevel from "../utils/constant";
import * as util from "util";

/**
 * Constructs a new StreamLogger instance with the provided configuration.
 * @constructor
 * @param {object} loggerConfiguration
 * @param {boolean} loggerConfiguration.enabled
 * @param {string|number} [loggerConfiguration.level] - The log level (default: LogLevel.ERROR).
 */
class StreamLogger {
  private isEnabled: boolean;
  private logLevel: number;

  constructor(
    loggerConfiguration: {
      enabled?: boolean;
      level?: string | number;
    } = {},
  ) {
    this.isEnabled = loggerConfiguration?.enabled === true;
    // console.log('isEnabled:', this.isEnabled);

    // Handle the case where loggerConfiguration.level is undefined
    if (loggerConfiguration?.level !== undefined) {
      this.logLevel = this.normalizeLogLevel(loggerConfiguration.level);
    } else {
      this.logLevel = LogLevel.ERROR; // Default log level
    }
  }

  // normalizeLogLevel method to validate and normalize the log level.
  private normalizeLogLevel(level: string | number): number {
    const levelMap: { [key: string]: number } = {
      ALL: LogLevel.ALL,
      INFO: LogLevel.INFO,
      WARN: LogLevel.WARN,
      ERROR: LogLevel.ERROR,
      DEBUG: LogLevel.DEBUG, // Add DEBUG level to the level map
    };

    if (typeof level === "string" && level.toUpperCase() in levelMap) {
      return levelMap[level.toUpperCase()];
    } else if (
      typeof level === "number" &&
      level >= LogLevel.DEBUG && // Adjust the lower bound for DEBUG
      level <= LogLevel.ALL
    ) {
      return level;
    }

    return LogLevel.ERROR;
  }

  // This method is used to log messages at the specified log level.
  private log(level: number, ...messages: any[]) {
    if (this.isEnabled && this.shouldLog(level)) {
      const logObject = {
        functionName: null,
        fileName: null,
        lineNumber: null,
        columnNumber: null,
        messages,
        errorMessage: null,
        errorStack: null,
      };

      if (
        [LogLevel.INFO, LogLevel.WARN, LogLevel.ERROR, LogLevel.DEBUG].includes(
          level,
        )
      ) {
        console.log(util.inspect(logObject, { depth: null }));
      }
    }
  }

  // This method checks whether a log message at a given level should be
  // logged based on the configured log level.
  private shouldLog(level: number): boolean {
    return this.logLevel === LogLevel.ALL || this.logLevel >= level;
  }

  public info(...messages: any[]) {
    this.log(LogLevel.INFO, ...messages);
  }

  public warn(...messages: any[]) {
    this.log(LogLevel.WARN, ...messages);
  }

  public error(...messages: any[]) {
    this.log(LogLevel.ERROR, ...messages);
  }

  // Add the debug method
  public debug(...messages: any[]) {
    this.log(LogLevel.DEBUG, ...messages);
  }
}

export { StreamLogger };
