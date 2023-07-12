import { ILogger } from './logger.interface.js';

export abstract class Logger implements ILogger {
  abstract error(message: unknown, ...optionalParams: unknown[]): void;
  abstract warn(message: unknown, ...optionalParams: unknown[]): void;
  abstract info(message: unknown, ...optionalParams: unknown[]): void;
  abstract debug(message: unknown, ...optionalParams: unknown[]): void;
  abstract trace(message: unknown, ...optionalParams: unknown[]): void;
}
