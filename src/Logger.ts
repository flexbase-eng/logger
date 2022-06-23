/**
 * Represents a type used to perform logging
 */
export interface Logger {
    /**
     * Write an error level log
     * @param message An object or string to log
     * @param optionalParams Additional parameters to be logged
     */
    error(message: any, ...optionalParams: any[]): void;
    /**
     * Write a warning level log
     * @param message An object or string to log
     * @param optionalParams Additional parameters to be logged
     */
    warn(message: any, ...optionalParams: any[]): void;
    /**
     * Write an information level log
     * @param message An object or string to log
     * @param optionalParams Additional parameters to be logged
     */
    info(message: any, ...optionalParams: any[]): void;
    /**
     * Write a debug level log
     * @param message An object or string to log
     * @param optionalParams Additional parameters to be logged
     */
    debug(message: any, ...optionalParams: any[]): void;
    /**
     * Write a trace level log
     * @param message An object or string to log
     * @param optionalParams Additional parameters to be logged
     */
    trace(message: any, ...optionalParams: any[]): void;
}
