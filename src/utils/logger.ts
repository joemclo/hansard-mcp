import winston from 'winston';
import path from 'path';
import os from 'os';
import fs from 'fs';

/**
 * Get the appropriate log directory based on the operating system
 */
const getLogDirectory = (): string => {
  const packageName = 'hansard-mcp'; // This should match your package.json name

  if (process.platform === 'win32') {
    // Windows: %PROGRAMDATA%\packageName\logs
    return path.join(process.env.PROGRAMDATA || 'C:\\ProgramData', packageName, 'logs');
  }

  // Unix-like systems: try /var/log/packageName first, fallback to ~/.packageName/logs
  const systemLogDir = path.join('/var', 'log', packageName);
  try {
    fs.mkdirSync(systemLogDir, { recursive: true });
    fs.accessSync(systemLogDir, fs.constants.W_OK);
    return systemLogDir;
  } catch {
    // Fall back to user's home directory if system directory is not writable
    return path.join(os.homedir(), `.${packageName}`, 'logs');
  }
};

/**
 * Create and configure the Winston logger instance
 */
const createLogger = (): winston.Logger => {
  const logDirectory = getLogDirectory();
  fs.mkdirSync(logDirectory, { recursive: true });

  const logFile = path.join(logDirectory, 'app.log');
  const errorLogFile = path.join(logDirectory, 'error.log');
  const exceptionLogFile = path.join(logDirectory, 'exceptions.log');

  return winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
      // Main log file for all levels
      new winston.transports.File({
        filename: logFile,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        tailable: true,
      }),
      // Separate error log file
      new winston.transports.File({
        filename: errorLogFile,
        level: 'error',
        maxsize: 5242880,
        maxFiles: 5,
        tailable: true,
      }),
    ],
    // Handle uncaught exceptions
    exceptionHandlers: [
      new winston.transports.File({
        filename: exceptionLogFile,
      }),
    ],
  });
};

// Create a singleton instance
const logger = createLogger();

// Type-safe logging functions
type LogMetadata = Record<string, unknown>;

export const logInfo = (message: string, metadata?: LogMetadata): void => {
  logger.info(message, metadata);
};

export const logError = (message: string, metadata?: LogMetadata): void => {
  logger.error(message, metadata);
};

export const logWarn = (message: string, metadata?: LogMetadata): void => {
  logger.warn(message, metadata);
};

export const logDebug = (message: string, metadata?: LogMetadata): void => {
  logger.debug(message, metadata);
};

// Export the logger instance for advanced use cases
export { logger };
