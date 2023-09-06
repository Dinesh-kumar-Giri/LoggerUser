# StreamLogger Package 🚀

StreamLogger is a simple logging package for JavaScript and TypeScript applications. It allows you to log messages at different log levels, such as INFO, WARN, and ERROR, with customizable configurations. This README file provides instructions on how to use the StreamLogger package effectively.

## Installation

To install the StreamLogger package, you can use npm or yarn:

```bash
npm i @zversal-ecom/zv-common-stream-logs

```

## Usage

Here's how you can use the StreamLogger package in your JavaScript or TypeScript project:

Import the StreamLogger

First, import the StreamLogger class and LogLevel constants in your code:

```bash
// For CommonJS (CJS) use:
const { StreamLogger } = require('@zversal-ecom/zv-common-stream-logs"');

// For ES Modules (ESM) use:
import { StreamLogger } from "@zversal-ecom/zv-common-stream-logs";;

```

## Create a Logger Instance

Create an instance of the StreamLogger class with your desired configuration:

```bash
const logger = new StreamLogger({
  enabled: true,
  level: "info", // The log level (default: LogLevel.ERROR)
});
```

You can customize the configuration by specifying the enabled property to enable or disable logging and setting the level property to control the log level. Available log levels are:

```
all: Log all messages.
debug: Log debug message
info: Log informational messages.
warn: Log warning messages.
error: Log error messages (default).
```

# Logging Messages

You can use the logger instance to log messages at different log levels:

```
logger.info('This is an informational message.');
logger.warn('This is a warning message.');
logger.debug('this is a debug message)
logger.error('This is an error message.');

```

The messages will be logged to the console if they meet the configured log level criteria.

Log Format
The logger will output log messages in a structured format. The output includes the following fields:

functionName: The name of the function where the log was called.
fileName: The name of the file where the log was called.
lineNumber: The line number in the file where the log was called.
columnNumber: The column number in the file where the log was called.
messages: The logged messages.
errorMessage: The error message (if applicable).
errorStack: The error stack trace (if applicable).

# Example

Here's an example of a log output:

```
{
  "functionName": "myFunction",
  "fileName": "app.js",
  "lineNumber": 42,
  "columnNumber": 13,
  "messages": ["This is an error message."],
  "errorMessage": "An error occurred.",
  "errorStack": "Error: An error occurred.\n    at myFunction (app.js:42:13)"
}

```

StreamLogger provides a straightforward and effective way to manage logging in your JavaScript and TypeScript applications.
