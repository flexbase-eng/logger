import { Logger } from './Logger';

/**
 * Represents a type that implements a console based logger
 */
export class ConsoleLogger implements Logger {
    error(message: any, ...optionalParams: any[]): void {
        console.error(message, optionalParams);
    }
    warn(message: any, ...optionalParams: any[]): void {
        console.warn(message, optionalParams);
    }
    info(message: any, ...optionalParams: any[]): void {
        console.info(message, optionalParams);
    }
    debug(message: any, ...optionalParams: any[]): void {
        console.debug(message, optionalParams);
    }
    trace(message: any, ...optionalParams: any[]): void {
        console.trace(message, optionalParams);
    }
}
