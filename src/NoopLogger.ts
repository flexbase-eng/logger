import { Logger } from './Logger';

/**
 * Represents a type that implements a no-op logger
 */
export class NoopLogger implements Logger {
    error(message: any, ...optionalParams: any[]): void {}
    warn(message: any, ...optionalParams: any[]): void {}
    info(message: any, ...optionalParams: any[]): void {}
    debug(message: any, ...optionalParams: any[]): void {}
    trace(message: any, ...optionalParams: any[]): void {}
}

/**
 * Represents an instance of NoopLogger
 */
export const noopLogger = new NoopLogger();
