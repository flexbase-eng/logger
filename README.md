[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=flexbase-eng_logger&metric=coverage)](https://sonarcloud.io/summary/new_code?id=flexbase-eng_logger)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=flexbase-eng_logger&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=flexbase-eng_logger)

# Logger

Defines a Logger interface that we can use in libraries and not force a specific logging framework on the consumer.

```ts
/**
 * Represents a type used to perform logging
 */
export interface Logger {
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
```
