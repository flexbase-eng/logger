import { Logger } from './Logger';

/**
 * Represents a type that implements a console based logger
 */
export class ConsoleLogger implements Logger {
    private log(level: 'error' | 'warn' | 'info' | 'debug' | 'trace', message: any, optionalParams: any[]) {
        optionalParams.length > 0 ? console[level](message, optionalParams) : console[level](message, optionalParams);
    }

    error(message: any, ...optionalParams: any[]): void {
        this.log('error', message, optionalParams);
    }
    warn(message: any, ...optionalParams: any[]): void {
        this.log('warn', message, optionalParams);
    }
    info(message: any, ...optionalParams: any[]): void {
        this.log('info', message, optionalParams);
    }
    debug(message: any, ...optionalParams: any[]): void {
        this.log('debug', message, optionalParams);
    }
    trace(message: any, ...optionalParams: any[]): void {
        this.log('trace', message, optionalParams);
    }
}

/**
 * Represents an instance of ConsoleLogger
 */
export const consoleLogger = new ConsoleLogger();
