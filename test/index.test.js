import helloWorld from '../dist/hello-world.cjs';

describe('test spec', () => {
  test('Default Test', () => {
    expect(helloWorld.helloWorld()).toBeTruthy();
  });
});
