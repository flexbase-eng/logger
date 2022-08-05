import { NoopLogger } from '../src/index';

test('NoopLogger error', () => {
    const logger = new NoopLogger();

    const error = jest.spyOn(logger, 'error');

    logger.error('test');

    expect(error).toBeCalledWith('test');
});

test('NoopLogger warn', () => {
    const logger = new NoopLogger();

    const warn = jest.spyOn(logger, 'warn');

    logger.warn('test');

    expect(warn).toBeCalledWith('test');
});

test('NoopLogger info', () => {
    const logger = new NoopLogger();

    const info = jest.spyOn(logger, 'info');

    logger.info('test');

    expect(info).toBeCalledWith('test');
});

test('NoopLogger debug', () => {
    const logger = new NoopLogger();

    const debug = jest.spyOn(logger, 'debug');

    logger.debug('test');

    expect(debug).toBeCalledWith('test');
});

test('NoopLogger trace', () => {
    const logger = new NoopLogger();

    const trace = jest.spyOn(logger, 'trace');

    logger.trace('test');

    expect(trace).toBeCalledWith('test');
});
