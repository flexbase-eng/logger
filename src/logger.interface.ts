/**
 * Represents a type used to perform logging
 */
export interface ILogger {
  /**
   * Write an error level log
   * @param message An object or string to log
   * @param optionalParams Additional parameters to be logged
   */
  error(message: unknown, ...optionalParams: unknown[]): void;
  /**
   * Write a warning level log
   * @param message An object or string to log
   * @param optionalParams Additional parameters to be logged
   */
  warn(message: unknown, ...optionalParams: unknown[]): void;
  /**
   * Write an information level log
   * @param message An object or string to log
   * @param optionalParams Additional parameters to be logged
   */
  info(message: unknown, ...optionalParams: unknown[]): void;
  /**
   * Write a debug level log
   * @param message An object or string to log
   * @param optionalParams Additional parameters to be logged
   */
  debug(message: unknown, ...optionalParams: unknown[]): void;
  /**
   * Write a trace level log
   * @param message An object or string to log
   * @param optionalParams Additional parameters to be logged
   */
  trace(message: unknown, ...optionalParams: unknown[]): void;
}
