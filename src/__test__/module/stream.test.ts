import { StreamLogger } from "../../module/streamLogs";
import LogLevel from "../../utils/constant";

describe("StreamLogger", () => {
  it("should initialize with default values", () => {
    const logger = new StreamLogger({ enabled: true });
    expect(logger).toBeInstanceOf(StreamLogger);
    expect(logger["isEnabled"]).toBe(true);
    expect(logger["logLevel"]).toBe(LogLevel.ERROR);
  });
  test("StreamLogger with valid logger configuration", () => {
    const loggerConfiguration = {
      enabled: true,
      level: "info",
    };
    const logger = new StreamLogger(loggerConfiguration);
    expect(typeof logger.info).toEqual("function");
    // expect(logger.info).toEqual("info");
  });

  test("StreamLogger with no logger configuration", () => {
    const logger = new StreamLogger();
    expect(typeof logger.error).toEqual("function");
  });

  it("should log messages at the specified log level if enabled", () => {
    const loggerConfiguration = {
      enabled: true,
      level: "info",
    };
    const logger = new StreamLogger(loggerConfiguration);
    const mockConsoleLog = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    logger.info("Info message");
    logger.warn("Warning message");
    logger.error("Error message");

    expect(mockConsoleLog).toHaveBeenCalledTimes(3); // INFO, WARNING, and ERROR logs

    // You can use toHaveBeenCalledWith for each log call
    expect(mockConsoleLog).toHaveBeenCalledWith(
      expect.stringContaining("Info message"),
    );
    expect(mockConsoleLog).toHaveBeenCalledWith(
      expect.stringContaining("Warning message"),
    );
    expect(mockConsoleLog).toHaveBeenCalledWith(
      expect.stringContaining("Error message"),
    );

    mockConsoleLog.mockRestore();
  });

  it("should not log an error message when disabled", () => {
    const logger = new StreamLogger({ enabled: false, level: LogLevel.ERROR });
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    logger.error("This is an error message");

    expect(consoleLogSpy).not.toHaveBeenCalled();

    consoleLogSpy.mockRestore();
  });
});
