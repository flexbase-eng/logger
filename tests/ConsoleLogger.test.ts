import { ConsoleLogger } from '../src/index';

test('ConsoleLogger error', () => {
    const logger = new ConsoleLogger();

    const error = jest.spyOn(console, 'error');

    logger.error('test');

    expect(error).toBeCalledWith('test');
});

test('ConsoleLogger warn', () => {
    const logger = new ConsoleLogger();

    const warn = jest.spyOn(console, 'warn');

    logger.warn('test');

    expect(warn).toBeCalledWith('test');
});

test('ConsoleLogger info', () => {
    const logger = new ConsoleLogger();

    const info = jest.spyOn(console, 'info');

    logger.info('test');

    expect(info).toBeCalledWith('test');
});

test('ConsoleLogger debug', () => {
    const logger = new ConsoleLogger();

    const debug = jest.spyOn(console, 'debug');

    logger.debug('test');

    expect(debug).toBeCalledWith('test');
});

test('ConsoleLogger trace', () => {
    const logger = new ConsoleLogger();

    const trace = jest.spyOn(console, 'trace');

    logger.trace('test');

    expect(trace).toBeCalledWith('test');
});
