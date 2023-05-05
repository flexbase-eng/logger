/* eslint @typescript-eslint/no-empty-function: 0  */
/* eslint @typescript-eslint/no-unused-vars: 0  */

import { Logger } from './logger.js';

/**
 * Represents a type that implements a no-op logger
 */
export class NoopLogger implements Logger {
  error(message: unknown, ...optionalParams: unknown[]): void {}
  warn(message: unknown, ...optionalParams: unknown[]): void {}
  info(message: unknown, ...optionalParams: unknown[]): void {}
  debug(message: unknown, ...optionalParams: unknown[]): void {}
  trace(message: unknown, ...optionalParams: unknown[]): void {}
}

/**
 * Represents an instance of NoopLogger
 */
export const noopLogger = new NoopLogger();
