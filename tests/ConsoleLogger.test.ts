import { test, expect, vi } from 'vitest';
import { ConsoleLogger } from '../src/index';

test('ConsoleLogger error', () => {
  const logger = new ConsoleLogger();

  const error = vi.spyOn(console, 'error');

  logger.error('test');

  expect(error).toBeCalledWith('test');
});

test('ConsoleLogger warn', () => {
  const logger = new ConsoleLogger();

  const warn = vi.spyOn(console, 'warn');

  logger.warn('test');

  expect(warn).toBeCalledWith('test');
});

test('ConsoleLogger info', () => {
  const logger = new ConsoleLogger();

  const info = vi.spyOn(console, 'info');

  logger.info('test');

  expect(info).toBeCalledWith('test');
});

test('ConsoleLogger debug', () => {
  const logger = new ConsoleLogger();

  const debug = vi.spyOn(console, 'debug');

  logger.debug('test');

  expect(debug).toBeCalledWith('test');
});

test('ConsoleLogger trace', () => {
  const logger = new ConsoleLogger();

  const trace = vi.spyOn(console, 'trace');

  logger.trace('test');

  expect(trace).toBeCalledWith('test');
});
