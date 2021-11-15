import helloWorld from '../src/index';

describe('helloWorld', () => {
  test('helloWorld() return string', () => {
    expect(typeof helloWorld.helloWorld()).toBe('string');
  });
});
