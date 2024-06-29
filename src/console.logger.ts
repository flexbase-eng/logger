import { Logger } from './logger.js';

/**
 * Represents a type that implements a console based logger
 */
export class ConsoleLogger implements Logger {
  constructor(private readonly _console: Console = console) {}

  private log(level: 'error' | 'warn' | 'info' | 'debug' | 'trace', message: unknown, optionalParams: unknown[]) {
    optionalParams.length > 0 ? this._console[level](message, optionalParams) : this._console[level](message);
  }

  error(message: unknown, ...optionalParams: unknown[]): void {
    this.log('error', message, optionalParams);
  }
  warn(message: unknown, ...optionalParams: unknown[]): void {
    this.log('warn', message, optionalParams);
  }
  info(message: unknown, ...optionalParams: unknown[]): void {
    this.log('info', message, optionalParams);
  }
  debug(message: unknown, ...optionalParams: unknown[]): void {
    this.log('debug', message, optionalParams);
  }
  trace(message: unknown, ...optionalParams: unknown[]): void {
    this.log('trace', message, optionalParams);
  }
}

/**
 * Represents an instance of ConsoleLogger
 */
export const consoleLogger = new ConsoleLogger();
