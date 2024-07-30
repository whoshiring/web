// Import Winston types
import type { LoggerOptions as WinstonLoggerOptions } from 'winston'

// Enum for log levels
export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  HTTP = 'http',
  VERBOSE = 'verbose',
  DEBUG = 'debug',
  SILLY = 'silly',
}

// Interface for log metadata
export interface LogMetadata {
  [key: string]: any
}

// Interface for logger configuration
export interface LoggerConfig {
  level: LogLevel
  format?: WinstonLoggerOptions['format']
  transports?: WinstonLoggerOptions['transports']
  silent?: boolean
  defaultMeta?: LogMetadata
}

// Interface for the log method
export interface LogMethod {
  (level: LogLevel, message: string, meta?: LogMetadata): void
}

// Interface for the logger instance
export interface Logger {
  log: LogMethod
  error(message: string, meta?: LogMetadata): void
  warn(message: string, meta?: LogMetadata): void
  info(message: string, meta?: LogMetadata): void
  http(message: string, meta?: LogMetadata): void
  verbose(message: string, meta?: LogMetadata): void
  debug(message: string, meta?: LogMetadata): void
  silly(message: string, meta?: LogMetadata): void
}

// Interface for the createLogger function
export interface CreateLogger {
  (config: LoggerConfig): Logger
}
