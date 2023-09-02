export enum Log_level {
    INFO = "info",
    WARN = "warn",
    ERROR = "error",
  }
  export const payloadStream = process.env.PAYLOAD_STREAM;
  export const errorStream = process.env.ERROR_STREAM;